const tickerItems = [
  'Graphic Design',
  'Brand Identity',
  'Portrait Art',
  'Logo Design',
  'Art Direction',
  'Illustration',
  'Flyer Design',
  'Motion Design',
  'Visual Storytelling',
  'Typography',
];

export function MarqueeTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="overflow-hidden border-t border-b py-4"
      style={{ background: '#1a1a0e', borderColor: 'rgba(232,226,213,0.08)' }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 px-5 whitespace-nowrap"
          >
            <span
              className="text-cream uppercase tracking-widest"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}
            >
              {item}
            </span>
            <span
              className="text-warm-gold"
              style={{ fontSize: '0.6rem' }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
