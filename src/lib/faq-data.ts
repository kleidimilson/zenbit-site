export interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

export const faqList: FAQItem[] = [
  {
    value: 'clientes-fora',
    question: 'Vocês trabalham com cliente de fora de Teresina?',
    answer:
      'A maior parte dos nossos clientes é de fora. O trabalho é remoto por padrão, com uma chamada semanal fixa e o board aberto o tempo todo — presencial quando o projeto justifica a passagem.',
  },
  {
    value: 'codigo',
    question: 'O código fica comigo?',
    answer:
      'Fica, desde o primeiro commit. Repositório no seu GitHub, infraestrutura na sua conta, credenciais no seu cofre. Se um dia você levar o projeto para outro time, ele não precisa começar do zero.',
  },
  {
    value: 'preco',
    question: 'Quanto custa um sistema sob medida?',
    answer:
      'Depende do escopo — não existe tabela fixa para algo feito sob medida. Na primeira conversa, sem custo, já saímos com uma faixa de investimento e prazo antes de qualquer proposta formal.',
  },
  {
    value: 'garantia',
    question: 'E depois que entrega, some?',
    answer:
      'Não. Todo projeto sai com três meses de garantia sobre o que foi entregue, e a manutenção mensal é opcional. Quem responde o chamado é quem escreveu o código.',
  },
  {
    value: 'comecar-pequeno',
    question: 'Dá pra começar pequeno?',
    answer:
      'Dá, e costuma ser o caminho certo. Um primeiro módulo pequeno prova o processo antes de comprometer o orçamento inteiro num sistema grande.',
  },
];
