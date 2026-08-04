import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Privacidade,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Leonam Matos Advocacia" },
      {
        name: "description",
        content:
          "Como os dados enviados por WhatsApp e durante o atendimento jurídico são tratados, armazenados e protegidos.",
      },
      { property: "og:title", content: "Política de Privacidade | Leonam Matos" },
      {
        property: "og:description",
        content: "Tratamento de dados no atendimento previdenciário de Leonam Matos.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function Privacidade() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
      <Link
        to="/"
        className="link-underline text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground"
      >
        Voltar
      </Link>
      <h1 className="mt-10 font-display text-3xl leading-tight lg:text-[2.6rem]">
        Política de Privacidade
      </h1>
      <span className="rule-gold mt-6" />

      <div className="mt-10 space-y-8 text-[1rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-xl">Dados tratados</h2>
          <p className="mt-3">
            São tratados apenas os dados que você envia voluntariamente durante o
            contato — nome, telefone e informações necessárias à análise do caso
            previdenciário, como histórico contributivo e documentos médicos.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl">Finalidade</h2>
          <p className="mt-3">
            As informações são utilizadas exclusivamente para avaliar a viabilidade do
            pedido, orientar o cliente e conduzir o processo administrativo ou judicial.
            Não há uso comercial, venda ou compartilhamento com terceiros para fins de
            marketing.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl">Sigilo profissional</h2>
          <p className="mt-3">
            Todo conteúdo compartilhado está protegido pelo sigilo profissional do
            advogado, previsto no Estatuto da Advocacia, e pelas regras da Lei Geral de
            Proteção de Dados.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl">Armazenamento e retenção</h2>
          <p className="mt-3">
            Os documentos são mantidos pelo período necessário ao acompanhamento do caso
            e ao cumprimento de obrigações legais, e depois descartados de forma segura.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl">Seus direitos</h2>
          <p className="mt-3">
            Você pode solicitar, a qualquer momento, confirmação do tratamento, acesso,
            correção ou eliminação dos seus dados. O pedido pode ser feito pelo mesmo
            canal de WhatsApp utilizado no atendimento.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl">Este site</h2>
          <p className="mt-3">
            Esta página não utiliza formulários, newsletter ou captura de e-mail. Os
            botões de contato apenas redirecionam para o WhatsApp, cujo tratamento de
            dados segue as políticas do próprio aplicativo.
          </p>
        </section>
      </div>
    </div>
  );
}
