import { useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/5586994201843?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20gratuita!.';

const ZMark = () => (
  <svg className="z-mark" width="22" height="22" viewBox="0 0 32 32" fill="none">
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

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <ZMark />
          <span className="wordmark">Zenbit</span>
          <span className="version">v.26</span>
        </a>

        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="nav-right">
          <span className="mono-dim">BR · 2026</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn primary"
          >
            <span className="btn-dot" />
            Agendar consultoria
          </a>
          <button
            className={`nav-burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          <a href="#servicos" onClick={close}>Serviços</a>
          <a href="#processo" onClick={close}>Processo</a>
          <a href="#sobre" onClick={close}>Sobre</a>
          <a href="#contato" onClick={close}>Contato</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn primary nav-mobile-cta"
            onClick={close}
          >
            <span className="btn-dot" />
            Agendar consultoria gratuita <span className="arrow">↗</span>
          </a>
        </div>
      )}
    </nav>
  );
};
