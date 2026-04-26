const items = [
  'Aplicativos Web',
  'Mobile iOS · Android',
  'Sistemas internos',
  'Consultoria de produto',
  'Integração de APIs',
  'Dashboards',
  'UI/UX',
  'Plataformas SaaS',
  'Automação',
  'Especialistas em React',
];

const tripled = [...items, ...items, ...items];

export function MarqueeSection() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {tripled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
