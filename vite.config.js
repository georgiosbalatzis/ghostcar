import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Canonical/OG URL: the f1-stories.gr build names the primary domain; the standalone build names its own page,
// which is where it is served until the github.io site hands over to f1-stories.gr/ghostcar/.
const CANONICAL_URL = `${process.env.VITE_F1STORIES_BUILD === "true" ? "https://f1-stories.gr" : "https://georgiosbalatzis.github.io"}/ghostcar/`;

export default defineConfig({
  plugins: [
    react(),
    {
      name: "canonical-url",
      transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("%CANONICAL_URL%", CANONICAL_URL) },
    },
  ],
  base: "/ghostcar/",
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // No explicit manualChunks for 'three' — named imports in useScene.js
        // allow Rollup to tree-shake unused Three.js classes. SceneStage3D is
        // already lazy-imported so the three code stays out of the initial bundle.
        manualChunks(id) {
          // Keep React in a predictable chunk for long-term caching
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
