const fonts = [
  [
    new URL("../../assets/fonts/ibm-plex-sans-latin.woff2", import.meta.url).href,
    "U+0000-00FF,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215",
  ],
  [new URL("../../assets/fonts/ibm-plex-sans-greek.woff2", import.meta.url).href, "U+0370-03FF"],
];
let embeddedFonts;

const asDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

async function fontCSS() {
  if (!embeddedFonts)
    embeddedFonts = Promise.all(
      fonts.map(async ([url, range]) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Font unavailable");
        return `@font-face{font-family:'IBM Plex Sans';font-style:normal;font-weight:100 900;src:url(${await asDataURL(await response.blob())}) format('woff2');unicode-range:${range}}`;
      })
    )
      .then((faces) => faces.join("\n"))
      .catch((error) => {
        embeddedFonts = null;
        throw error;
      });
  return embeddedFonts;
}

export async function serializeFigure(svg) {
  await document.fonts.ready;
  const clone = svg.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const sources = [svg, ...svg.querySelectorAll("*")];
  [clone, ...clone.querySelectorAll("*")].forEach((node, i) => {
    const style = getComputedStyle(sources[i]);
    // Freeze resolved theme colours and text; the downloaded SVG has no app stylesheet.
    for (const property of [
      "fill",
      "stroke",
      "stroke-width",
      "font-family",
      "font-size",
      "font-weight",
      "text-anchor",
      "paint-order",
    ]) {
      node.style.setProperty(property, style.getPropertyValue(property));
    }
  });
  const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = await fontCSS();
  clone.prepend(style);
  const { width, height } = svg.viewBox.baseVal;
  clone.setAttribute("width", width);
  clone.setAttribute("height", height);
  return new Blob([new XMLSerializer().serializeToString(clone)], { type: "image/svg+xml;charset=utf-8" });
}

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function exportFigure(svg, format, filename) {
  const blob = await serializeFigure(svg);
  if (format === "svg") {
    download(blob, `${filename}.svg`);
    return;
  }
  const url = URL.createObjectURL(blob);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 4200;
    canvas.height = Math.round((4200 * svg.viewBox.baseVal.height) / svg.viewBox.baseVal.width);
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas unavailable");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const png = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!png) throw new Error("Image unavailable");
    download(png, `${filename}.png`);
  } finally {
    URL.revokeObjectURL(url);
  }
}
