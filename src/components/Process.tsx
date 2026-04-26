const phases = [
  {
    n: 'fase 01',
    title: 'Conversa',
    copy: 'Entendemos o problema antes de propor solução. Nada de proposta no segundo dia.',
    dur: '~ 1 semana',
    active: true,
  },
  {
    n: 'fase 02',
    title: 'Escopo',
    copy: 'Definimos juntos o que entra, o que fica fora, e o que vira "fase 2".',
    dur: '1 — 2 semanas',
    active: false,
  },
  {
    n: 'fase 03',
    title: 'Construção',
    copy: 'Sprints curtos, demos toda sexta, código no seu repositório desde o dia um.',
    dur: '4 — 14 semanas',
    active: false,
  },
  {
    n: 'fase 04',
    title: 'Operação',
    copy: 'Ficamos por perto enquanto for útil. Suporte, manutenção e a próxima fase.',
    dur: 'opcional',
    active: false,
  },
];

export function Process() {
  return (
    <section className="process" id="processo">
      <div className="wrap">
        <div className="process-header">
          <span className="section-label">// 03 — processo</span>
          <h2>
            Como trabalhamos. <span className="muted">Sem mistério.</span>
          </h2>
        </div>
        <div className="phases-grid">
          <div className="timeline-line" />
          {phases.map(phase => (
            <div key={phase.n} className="phase">
              <div className={`phase-dot${phase.active ? ' active' : ''}`} />
              <div className="phase-inner">
                <div className="phase-n">{phase.n}</div>
                <div className="phase-title">{phase.title}</div>
                <p className="phase-copy">{phase.copy}</p>
                <span className="phase-dur">⏱ {phase.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
