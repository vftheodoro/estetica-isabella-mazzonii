import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { services } from "@/config/site";
import { Sparkle, WhatsApp } from "@/components/icons";
import { buildWhatsAppUrl } from "@/utils/contact";

export const metadata: Metadata = {
  title: "Serviços e valores",
  description: "Conheça os serviços e valores da Estética Isabella Mazzoni em Santo André.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Experiências de cuidado</span>
          <h1>Serviços &amp; valores</h1>
          <p>
            Escolha o cuidado ideal para o seu momento. Se estiver em dúvida, fale com a Isabella pelo
            WhatsApp.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-grid all-services">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <Reveal className="services-help" delay={120}>
            <span className="services-help-icon" aria-hidden="true">
              <Sparkle />
            </span>
            <h2>Não sabe qual escolher?</h2>
            <p>
              Conte como você está se sentindo e receba uma orientação para escolher o atendimento.
            </p>
            <a
              className="button button-primary"
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp /> Falar com a Isabella
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
