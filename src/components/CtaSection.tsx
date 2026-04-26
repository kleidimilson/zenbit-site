const WHATSAPP_URL =
  'https://wa.me/5586994201843?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20gratuita!.';

export function CtaSection() {
  return (
    <section className="cta" id="contato">
      <div className="wrap">
        <div className="cta-card">
          <svg className="cta-deco" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#7CFF6B" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotgrid)" />
          </svg>

          <div className="cta-inner">
            <div>
              <span className="accent-label">// 04 — vamos conversar</span>
              <h2>
                Tem um problema <em>que mereça</em> software?
              </h2>
              <p>
                30 minutos, sem proposta no fim da chamada. Se a gente não for o time certo, dizemos
                — e indicamos quem é.
              </p>
            </div>

            <div className="cta-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn primary"
                style={{ justifyContent: 'space-between', padding: '18px 22px', fontSize: 16 }}
              >
                Agendar consultoria gratuita <span className="arrow">↗</span>
              </a>
              <div className="email-form">
                <input type="email" placeholder="seu@email.com.br" />
                <button type="button">Inscrever →</button>
              </div>
              <span className="cta-note">recebemos a primeira resposta em ≤ 1 dia útil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
