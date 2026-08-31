import * as Accordion from '@radix-ui/react-accordion';
import { faqList } from '@/lib/faq-data';

export function FAQ() {
  return (
    <section className="faq" id="perguntas">
      <div className="wrap">
        <div className="section-header">
          <span className="section-label">// 04 — perguntas</span>
          <h2>
            O que perguntam <span className="muted">antes de fechar.</span>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="faq-list">
          {faqList.map(item => (
            <Accordion.Item key={item.value} value={item.value} className="faq-item">
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger">
                  {item.question}
                  <span className="faq-icon" aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
