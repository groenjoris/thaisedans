'use client';

interface SubNavProps {
  items: { key: string; label: string }[];
  activeKey?: string;
}

export default function SubNav({ items }: SubNavProps) {
  function scrollTo(key: string) {
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
      {items.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => scrollTo(key)}
          className="px-4 py-2 text-sm font-medium text-thai-dark/70 hover:text-thai-gold border border-thai-gold/20 hover:border-thai-gold/50 rounded-sm transition-all"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
