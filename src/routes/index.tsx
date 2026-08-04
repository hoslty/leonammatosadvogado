import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import retrato from "@/assets/leonam-matos.png.asset.json";

const WHATSAPP =
  "https://wa.me/5500000000000?text=" +
  encodeURIComponent("Olá, Dr. Leonam. Gostaria de falar sobre um caso previdenciário.");

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Leonam Matos — Advogado" },
      {
        name: "description",
        content:
          "Advocacia previdenciária para quem precisa de segurança na análise do próprio direito: aposentadorias, benefícios negados, auxílios e revisões junto ao INSS.",
      },
      {
        property: "og:title",
        content: "Leonam Matos — Advogado",
      },
      {
        property: "og:description",
        content:
          "Advocacia previdenciária para quem precisa de segurança na análise do próprio direito: aposentadorias, benefícios negados, auxílios e revisões junto ao INSS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Leonam Matos",
          description:
            "Advogado com atuação dedicada ao Direito Previdenciário: aposentadorias, benefícios por incapacidade e revisões junto ao INSS.",
          areaServed: "BR",
          knowsAbout: [
            "Direito Previdenciário",
            "Aposentadoria",
            "Benefício por incapacidade",
            "Revisão de benefício",
            "INSS",
          ],
        }),
      },
    ],
  }),
});

function WhatsappLink({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "outline" | "large";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 font-sans text-[0.78rem] uppercase tracking-[0.18em] transition-all duration-500 will-change-transform";
  const styles = {
    solid:
      "bg-ink text-paper px-8 py-4 hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)]",
    outline:
      "border border-ink/25 px-8 py-4 text-ink hover:border-gold hover:-translate-y-0.5",
    large:
      "bg-ink text-paper px-10 py-5 text-[0.8rem] hover:bg-ink-soft hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-26px_rgba(0,0,0,0.6)]",
  }[variant];

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

const areas = [
  {
    title: "Aposentadoria por tempo de contribuição",
    text: "Levantamento completo do histórico contributivo e definição do melhor momento e da melhor regra de transição para requerer.",
  },
  {
    title: "Benefício negado pelo INSS",
    text: "Leitura técnica da negativa, correção da instrução do pedido e condução do recurso ou da ação judicial.",
  },
  {
    title: "Auxílio por incapacidade",
    text: "Organização da prova médica e acompanhamento em perícias, do requerimento administrativo à decisão.",
  },
  {
    title: "Aposentadoria especial",
    text: "Comprovação de exposição a agentes nocivos por meio de PPP, LTCAT e prova pericial, quando necessária.",
  },
  {
    title: "Revisão de benefício",
    text: "Verificação de erros de cálculo, tempo não computado e vínculos ausentes que reduzem a renda mensal.",
  },
  {
    title: "Planejamento previdenciário",
    text: "Projeção de cenários para quem ainda contribui e quer decidir com números, não com suposições.",
  },
];

const diferenciais = [
  "Atendimento conduzido pessoalmente pelo advogado",
  "Análise técnica antes de qualquer requerimento",
  "Atuação dedicada ao Direito Previdenciário",
  "Retorno objetivo sobre cada andamento",
  "Linguagem clara, sem jargão desnecessário",
  "Sigilo integral sobre documentos e histórico",
];

const passos = [
  {
    n: "01",
    title: "Contato pelo WhatsApp",
    text: "Você descreve a situação em poucas linhas e recebe orientação sobre quais documentos importam.",
  },
  {
    n: "02",
    title: "Análise do caso",
    text: "Estudo do CNIS, dos vínculos e da documentação para identificar o direito e o cenário mais favorável.",
  },
  {
    n: "03",
    title: "Definição da estratégia",
    text: "Apresentação do caminho recomendado — administrativo ou judicial — com prazos e expectativas reais.",
  },
  {
    n: "04",
    title: "Acompanhamento até a decisão",
    text: "Condução do processo, preparo para perícias e comunicação a cada movimentação relevante.",
  },
];

const faq = [
  {
    q: "Quando devo procurar um advogado previdenciarista?",
    a: "Antes de pedir o benefício, sempre que possível. A análise prévia do histórico contributivo evita requerimentos precoces, valores menores do que o devido e negativas que poderiam ser prevenidas.",
  },
  {
    q: "Meu pedido foi negado pelo INSS. Ainda há o que fazer?",
    a: "Na maior parte dos casos, sim. A negativa é reexaminada para verificar se houve falha na instrução do pedido, tempo não reconhecido ou avaliação médica incompleta, e a partir disso se define o recurso ou a via judicial.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "Ambos. A maior parte do acompanhamento é feita de forma remota, com envio digital de documentos, o que costuma ser mais rápido e discreto para quem já está em tratamento ou trabalhando.",
  },
  {
    q: "Como funciona a primeira análise?",
    a: "A conversa inicial serve para entender o caso e listar os documentos necessários — normalmente CNIS, carteira de trabalho, laudos e comunicados do INSS. Só depois disso é apresentada uma orientação técnica.",
  },
  {
    q: "Há atendimento em todo o Brasil?",
    a: "Sim. Processos previdenciários tramitam de forma eletrônica, o que permite atuação para clientes de qualquer estado.",
  },
  {
    q: "Como entro em contato?",
    a: "Pelo WhatsApp, usando qualquer um dos botões desta página. A mensagem é lida e respondida diretamente pelo advogado.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">Leonam Matos</span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Advocacia Previdenciária
            </span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-9 md:flex">
            {[
              ["Atuação", "#atuacao"],
              ["Sobre", "#sobre"],
              ["Processo", "#processo"],
              ["Dúvidas", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="link-underline text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-ink link-underline md:inline"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 lg:px-10 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Direito Previdenciário</p>
              <span className="rule-gold mt-6" />
              <h1 className="mt-8 font-display text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
                Segurança técnica para
                <span className="italic text-ink-soft"> decidir seu benefício</span> com
                clareza.
              </h1>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
                Aposentadorias, auxílios e revisões exigem leitura precisa do histórico
                contributivo. O trabalho começa pela análise — e só depois pelo
                requerimento.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsappLink>Falar com o advogado</WhatsappLink>
                <a
                  href="#atuacao"
                  className="link-underline self-start py-4 text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft"
                >
                  Ver áreas de atuação
                </a>
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:pl-6">
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 hidden h-24 w-24 border-t border-l border-gold/60 lg:block"
                />
                <img
                  src={retrato.url}
                  width={1024}
                  height={1024}
                  loading="eager"
                  alt="Leonam Matos, advogado previdenciarista, em frente a uma unidade da Previdência Social"
                  className="w-full object-cover grayscale-[18%] transition-all duration-700 hover:grayscale-0"
                />
                <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Leonam Matos — Advogado
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section id="sobre" className="border-y border-border/70 bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
              <Reveal>
                <p className="eyebrow">Quem conduz o seu caso</p>
                <h2 className="mt-6 font-display text-3xl leading-tight lg:text-[2.5rem]">
                  Leonam Matos
                </h2>
                <span className="rule-gold mt-6" />
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-[1.02rem] leading-relaxed text-ink-soft">
                  <p>
                    Atuo exclusivamente em Direito Previdenciário, acompanhando
                    trabalhadores, autônomos e segurados especiais em pedidos de
                    aposentadoria, benefícios por incapacidade e revisões junto ao INSS.
                  </p>
                  <p>
                    Cada caso começa pela leitura do histórico contributivo. Essa etapa
                    define se o pedido deve ser feito agora, adiado ou reformulado — e é
                    o que separa um benefício concedido de uma negativa evitável.
                  </p>
                  <p>
                    O atendimento é conduzido diretamente por mim, com retorno objetivo
                    sobre cada andamento e sem repasse do caso a intermediários.
                  </p>
                </div>
                <div className="mt-10">
                  <WhatsappLink variant="outline">Conversar sobre meu caso</WhatsappLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ÁREAS */}
        <section id="atuacao" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="mt-6 font-display text-3xl leading-tight lg:text-[2.5rem]">
              Frentes de trabalho dentro da matéria previdenciária
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-x-14 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal as="li" key={area.title} delay={i * 70}>
                <article className="group h-full border-t border-border py-8 transition-colors duration-500 hover:border-gold">
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.3rem] leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {area.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* DIFERENCIAIS */}
        <section className="border-y border-border/70 bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
              <Reveal>
                <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-paper/50">
                  Como trabalho
                </p>
                <h2 className="mt-6 font-display text-3xl leading-tight text-paper lg:text-[2.5rem]">
                  Método antes de promessa
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <ul className="divide-y divide-paper/12">
                  {diferenciais.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-5 py-5 text-[1rem] text-paper/85"
                    >
                      <span aria-hidden="true" className="mt-2 h-px w-6 bg-gold" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-6 font-display text-3xl leading-tight lg:text-[2.5rem]">
              Quatro etapas, do primeiro contato à decisão
            </h2>
          </Reveal>

          <ol className="mt-16 border-l border-border">
            {passos.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 90}>
                <div className="group relative pl-8 pb-12 lg:pl-14">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 h-px w-5 bg-border transition-all duration-500 group-hover:w-8 group-hover:bg-gold lg:w-9"
                  />
                  <div className="grid gap-3 lg:grid-cols-[6rem_1fr] lg:gap-10">
                    <span className="font-display text-sm text-gold">{p.n}</span>
                    <div>
                      <h3 className="font-display text-[1.35rem] leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* CTA INTERMEDIÁRIO */}
        <section className="border-y border-border/70 bg-secondary/60">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
            <Reveal>
              <span className="rule-gold mx-auto" />
              <h2 className="mt-8 font-display text-[1.9rem] leading-tight lg:text-[2.6rem]">
                Anos de contribuição merecem uma análise à altura.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">
                Um pedido bem instruído desde o início costuma ser a diferença entre a
                concessão e uma nova espera.
              </p>
              <div className="mt-10 flex justify-center">
                <WhatsappLink>Enviar mensagem no WhatsApp</WhatsappLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className="mt-6 font-display text-3xl leading-tight lg:text-[2.5rem]">
                Dúvidas que aparecem antes do primeiro contato
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="border-t border-border">
                {faq.map((item) => (
                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-6 font-display text-[1.08rem] normal-case tracking-normal hover:no-underline">
                      <h3 className="font-display text-[1.08rem] font-normal">
                        {item.q}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="max-w-2xl pb-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="border-t border-border/70 bg-ink text-paper">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
            <Reveal>
              <span className="rule-gold mx-auto" />
              <h2 className="mt-8 font-display text-[2rem] leading-[1.12] text-paper lg:text-[3rem]">
                Entenda seu direito antes de assinar qualquer requerimento.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-[1rem] leading-relaxed text-paper/70">
                Descreva sua situação em poucas linhas. A resposta vem com a orientação
                inicial e a lista dos documentos que realmente importam.
              </p>
              <div className="mt-12 flex justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 border border-paper/25 bg-paper px-10 py-5 font-sans text-[0.8rem] uppercase tracking-[0.18em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-gold"
                >
                  Conversar pelo WhatsApp
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="font-display text-lg">Leonam Matos</p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              Advocacia Previdenciária
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
            <a href="/politica-de-privacidade" className="link-underline">
              Política de Privacidade
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
