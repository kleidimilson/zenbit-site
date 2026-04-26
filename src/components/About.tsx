const stats = [
  { n: '01', value: '7', label: 'projetos\nentregues', sub: '2023 → 2026' },
  { n: '02', value: '4', label: 'engenheiros\nem time', sub: 'remoto, BR' },
  { n: '03', value: '2', label: 'clientes\nrecorrentes', sub: 'a 3+ anos' },
  { n: '04', value: '∞', label: 'cafés\ntomados', sub: 'sem ironia' },
];

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div className="section-header">
          <span className="section-label">// 01 — sobre</span>
          <div>
            <h2>
              Somos uma <em>software-house</em> brasileira que prefere o trabalho de oficina ao de
              fábrica — pequenos times, decisões claras, software que envelhece bem.
            </h2>
          </div>
        </div>
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.n} className="stat">
              <span className="mono-dim">{s.n}</span>
              <div className="stat-n">{s.value}</div>
              <div className="stat-l">{s.label}</div>
              <span className="stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
