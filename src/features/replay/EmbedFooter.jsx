import Icon from "../../components/ui/Icon.jsx";

export default function EmbedFooter({ openUrl }) {
  return (
    <footer className="embed__footer">
      <p className="embed__source">Πηγή: OpenF1</p>
      <a className="embed__open" href={openUrl} target="_blank" rel="noopener noreferrer">
        <span className="embed__brand">F1 STORIES.</span>
        <span>Άνοιγμα στο Ghost Car</span>
        <Icon name="external" size={12} />
      </a>
    </footer>
  );
}
