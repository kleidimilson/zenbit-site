import * as Accordion from '@radix-ui/react-accordion';
import { faqList, type FAQItem } from '@/lib/faq-data';

interface FAQProps {
  /** Overrides the default site-wide questions — used by the local landing pages. */
  items?: FAQItem[];
  label?: string;
  heading?: string;
}

export function FAQ({ items = faqList, label = '// 04 — perguntas', heading }: FAQProps) {
  return (
    <section className="faq" id="perguntas">
      <div className="wrap">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <h2>
            {heading ?? (
              <>
                O que perguntam <span className="muted">antes de fechar.</span>
              </>
            )}
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="faq-list">
          {items.map(item => (
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
