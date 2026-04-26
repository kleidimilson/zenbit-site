const ZMark = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="rgba(255,255,255,0.18)" />
    <path
      d="M9 10.5h13.5L10.5 22H23"
      stroke="#7CFF6B"
      strokeWidth="2.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="footer-wordmark">
        <span>
          Zenbit<span className="footer-wordmark-accent">.</span>
        </span>
        <span className="footer-since">↗ desde 2018</span>
      </div>

      <div className="footer-grid">
        <div className="footer-about">
          <div className="footer-about-logo">
            <ZMark />
            <span className="mono-dim" style={{ color: 'var(--ink-2)' }}>
              Zenbit Tech LTDA
            </span>
          </div>
          <p>
            Software-house brasileira focada em produtos sob medida para empresas que precisam de
            algo específico.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Zenbit</div>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#">Time</a></li>
            <li><a href="#">Carreira</a></li>
            <li><a href="#">Manifesto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Trabalho</div>
          <ul>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Estudos de caso</a></li>
            <li><a href="#">Stack</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-label">Contato</div>
          <ul>
            <li><a href="mailto:contato@zenbit.com.br">contato@zenbit.com.br</a></li>
            <li><a href="https://wa.me/5586994201843" target="_blank" rel="noreferrer noopener">+55 86 9 9420-1843</a></li>
            <li><a href="#contato">Teresina, PI</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="mono-dim">© 2026 Zenbit</span>
        <span className="mono-dim">feito com café &amp; make · Teresina, PI</span>
      </div>
    </div>
  </footer>
);
