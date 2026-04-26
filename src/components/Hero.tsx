import { useEffect, useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/5586994201843?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20gratuita!.';

const terminalLines = [
  { prompt: '$', text: 'zenbit init projeto', ok: false },
  { prompt: '›', text: 'analisando requisitos…', ok: false },
  { prompt: '›', text: 'desenhando arquitetura…', ok: false },
  { prompt: '✓', text: 'pronto pra construir.', ok: true },
];

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % 4), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="wrap rel">
        <div className="hero-meta">
          <span>// software house · teresina, br</span>
         
          <span>esc · 2018 → ∞</span>
        </div>

        <div className="hero-grid">
          <div>
            <div className="hero-tags">
              <span className="tag">
                <span className="tag-dot" />
                Sob medida
              </span>
              <span className="tag">
                <span className="tag-dot" />
                Web · Mobile · Sistemas
              </span>
            </div>
            <h1>
              Software feito sob <em>medida.</em>
              <span className="line-2">Para quem não cabe no padrão.</span>
            </h1>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="t-dot" />
              <span className="t-dot" />
              <span className="t-dot" />
              <span style={{ marginLeft: 10 }}>~/zenbit/sob-medida</span>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, i) => (
                <div key={i} className={`t-line${i > step ? ' dim' : ''}`}>
                  <span className={`t-prompt${line.ok ? ' ok' : ''}`}>{line.prompt}</span>
                  <span>
                    {line.text}
                    {i === step && <span className="t-cursor" />}
                  </span>
                </div>
              ))}
            </div>
            <div className="terminal-footer">
              <span>processo · 4 fases</span>
              <span>2 → 16 semanas</span>
            </div>
          </div>
        </div>

        <div className="hero-sub">
          <p>
            Construímos aplicativos, sistemas e plataformas para empresas que precisam de algo{' '}
            <strong>específico</strong> — não de um template. Engenharia próxima, design honesto,
            prazos que valem a palavra.
          </p>
          <div className="hero-ctas">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn primary"
            >
              Iniciar um projeto <span className="arrow">↗</span>
            </a>
            <a href="#servicos" className="btn mono-btn">
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
