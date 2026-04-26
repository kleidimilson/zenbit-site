export function Testimonial() {
  return (
    <section className="testimonial">
      <div className="wrap">
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <span className="mono-dim" style={{ position: 'relative' }}>
            // fala de quem contratou
          </span>
          <blockquote>
            A Zenbit não vendeu um pacote — eles entraram no problema com a gente. Em três meses
            tínhamos um sistema que <em>realmente</em> trocou a planilha. E que a equipe quer usar.
          </blockquote>
          <div className="testimonial-author">
            <div className="author-avatar">F</div>
            <div>
              <div className="author-name">Fernanda Castro</div>
              <div className="author-role">Diretora de Operações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
