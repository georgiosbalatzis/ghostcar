const SPONSORS = [
  ["ΧΟΡΗΓΟΣ", "Μπαλατζής Χωματουργικά", "https://balatzis.gr/", "balatzis.webp"],
  ["ΣΥΝΕΡΓΑΤΗΣ", "Πουρτσίδης Γεννήτριες", "https://pourtsidisgenerators.gr/", "pourtsidis-generators.webp"],
  ["POWERED BY", "Μπαλατζής Δομικά", "https://balatzis.gr/#domika", "balatzis-domika.webp"],
  ["ΣΥΝΕΡΓΑΤΗΣ", "Αμβροσιάδης", "https://ambrosiadis.gr/", "ambrosiadis.webp"],
  ["ADVERTISING PARTNER", "Bed and Home", "https://www.bedandhome.gr/", "bed-and-home.webp"],
  ["ΣΥΝΕΡΓΑΤΗΣ", "Grand Realm", "https://www.grandrealm.gr/", "grand-realm.webp"],
];

export default function SponsorSection() {
  return (
    <section className="sponsors" aria-labelledby="sponsors-title">
      <div className="sponsors__layout">
        <h2 className="sponsors__title" id="sponsors-title">
          ΜΑΖΙ ΣΤΗΝ ΕΚΚΙΝΗΣΗ
        </h2>
        <ul className="sponsors__logos">
          {SPONSORS.map(([type, name, href, logo]) => (
            <li key={name}>
              <a className="sponsors__logo" href={href} target="_blank" rel="noopener noreferrer sponsored">
                <img
                  src={`${import.meta.env.BASE_URL}sponsors/${logo}`}
                  alt={name}
                  width="320"
                  height="160"
                  loading="lazy"
                  decoding="async"
                />
                <span>{type}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
