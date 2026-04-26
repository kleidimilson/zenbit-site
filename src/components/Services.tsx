const services = [
  {
    n: '01',
    title: 'Sistemas sob medida',
    copy: 'Plataformas internas, ERPs adaptados, fluxos que o seu Excel já não dá conta. Construídos com a sua equipe, não em cima dela.',
    tags: ['Node', 'PostgreSQL', 'TypeScript', 'Auth0'],
  },
  {
    n: '02',
    title: 'Aplicativos móveis',
    copy: 'iOS e Android nativos quando faz sentido, React Native quando o cronograma manda. App store, EMM, push, deep links — tudo coberto.',
    tags: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    n: '03',
    title: 'Sites & produtos web',
    copy: 'Da landing que converte ao SaaS que escala. Performance, SEO, acessibilidade — não é tema de quarta-feira, é o trabalho.',
    tags: ['Next.js', 'Astro', 'Prisma', 'Vercel'],
  },
  {
    n: '04',
    title: 'Consultoria técnica',
    copy: 'Auditoria de código, arquitetura, contratação de devs, decisões de stack. Senioridade emprestada por hora ou por projeto.',
    tags: ['Arquitetura', 'Code review', 'Hiring', 'Roadmap'],
  },
];

export function Services() {
  return (
    <section className="services" id="servicos">
      <div className="wrap">
        <div className="services-header">
          <span className="section-label">// 02 — serviços</span>
          <h2>
            Quatro ofícios. <span className="muted">Um padrão.</span>
          </h2>
          <span className="mono-dim" style={{ textAlign: 'right' }}>
            04 disciplinas
          </span>
        </div>
        <div className="services-list">
          {services.map(s => (
            <div key={s.n} className="service-row">
              <span className="service-n">{s.n}</span>
              <div className="service-title">{s.title}</div>
              <p className="service-copy">{s.copy}</p>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
