import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  Calendar,
  Check,
  Clock,
  Droplet,
  Hands,
  Heart,
  MapPin,
  Quote,
  Sparkle,
  User,
  WhatsApp,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { InstagramFeed } from "@/components/instagram-feed";
import { ServiceCard } from "@/components/service-card";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { services, site, testimonials } from "@/config/site";
import { buildWhatsAppUrl } from "@/utils/contact";

const faqs = [
  [
    "Como faço para agendar?",
    "O agendamento é feito diretamente pelo WhatsApp. Você escolhe o serviço e combina o melhor horário com a Isabella.",
  ],
  [
    "Qual atendimento escolher?",
    "Conte como você está se sentindo e seus objetivos. A Isabella orientará a experiência mais adequada.",
  ],
  [
    "Existem pacotes?",
    "Sim. Todos os serviços possuem opção de pacote com quatro sessões.",
  ],
  [
    "Onde fica o espaço?",
    "Na Rua Comendador Antônio Benvenuto Bataglia, 394, Santa Maria, Santo André.",
  ],
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/isabella-hero.webp"
          alt="Isabella Mazzoni em seu espaço de atendimento"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-brand animate-rise">Isabella Mazzoni</p>
          <h1 className="animate-rise delay-1">
            Seu corpo pede
            <br />
            <em>cuidado,</em> não cobrança.
          </h1>
          <p className="animate-rise delay-2">
            Atendimentos personalizados para aliviar o inchaço, relaxar e fazer você se sentir ainda
            melhor no próprio corpo.
          </p>
          <div className="hero-actions animate-rise delay-3">
            <a
              className="button button-primary"
              href={buildWhatsAppUrl("uma drenagem linfática")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp /> Agendar pelo WhatsApp
            </a>
            <Link className="button button-ghost" href="/servicos">
              Ver serviços
            </Link>
          </div>
          <ul className="hero-highlights animate-rise delay-4">
            <li>
              <User /> Atendimento individual
            </li>
            <li>
              <Calendar /> Terça a sábado
            </li>
            <li>
              <MapPin /> Santa Maria, Santo André
            </li>
          </ul>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <Reveal>
            <span className="eyebrow burgundy">Cuidado com propósito</span>
            <h2>
              Leveza que você sente.
              <br />
              Cuidado que respeita você.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Mais do que uma técnica, cada atendimento começa com escuta. Entendo suas necessidades e
              objetivos para oferecer uma experiência individual, segura e acolhedora.
            </p>
            <div className="intro-pills">
              <span>
                <Hands /> Técnica + escuta
              </span>
              <span>
                <Heart /> Ambiente acolhedor
              </span>
              <span>
                <Sparkle /> Resultado sentido
              </span>
            </div>
            <a className="text-link" href="#sobre">
              Conheça a Isabella <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section featured-service">
        <div className="container feature-grid">
          <Reveal className="feature-visual">
            <Image
              src="/images/drenagem-linfatica.jpg"
              alt="Sessão de drenagem linfática"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="feature-image"
            />
            <div className="feature-visual-shade" />
            <div className="feature-tag">
              <Droplet />
              <span>
                Experiência
                <strong>em destaque</strong>
              </span>
            </div>
          </Reveal>
          <Reveal className="feature-copy" delay={140}>
            <span className="eyebrow">Mais procurado</span>
            <h2>
              Drenagem
              <br />
              <em>Linfática</em>
            </h2>
            <p>
              Uma pausa para aliviar a sensação de inchaço, pernas pesadas e retenção de líquidos —
              com movimentos suaves e atenção ao que seu corpo precisa.
            </p>
            <ul>
              <li>
                <Check /> Sensação de leveza e bem-estar
              </li>
              <li>
                <Check /> Cuidado ajustado às suas necessidades
              </li>
              <li>
                <Check /> Ambiente acolhedor e profissional
              </li>
            </ul>
            <a
              className="button button-light"
              href={buildWhatsAppUrl("uma drenagem linfática")}
              target="_blank"
              rel="noreferrer"
            >
              Agendar drenagem <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow burgundy">Experiências de cuidado</span>
              <h2>Escolha o seu momento</h2>
            </div>
            <p>Valores transparentes para você escolher o cuidado que combina com seu momento.</p>
          </Reveal>
          <div className="service-grid">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center" delay={180}>
            <Link className="button button-outline" href="/servicos">
              Ver todos os serviços e valores <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <Reveal className="about-image-wrap">
            <Image
              src="/images/isabella-original.webp"
              alt="Retrato original de Isabella Mazzoni"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              className="about-image"
            />
            <div className="about-cred">
              <strong>3 anos</strong>
              <span>cuidando de mulheres</span>
            </div>
          </Reveal>
          <Reveal className="about-copy" delay={120}>
            <span className="eyebrow burgundy">Sobre mim</span>
            <h2>
              Ciência, técnica
              <br />e um olhar <em>humano.</em>
            </h2>
            <p>
              Escolhi a Biomedicina por acreditar na importância da ciência e do cuidado. Ao longo da
              minha formação, encontrei na estética uma verdadeira paixão.
            </p>
            <p>
              Há 3 anos venho construindo minha trajetória nessa área, com cursos e certificações em
              técnicas de massagens e estética corporal, sempre aprimorando meus conhecimentos para
              oferecer atendimentos personalizados.
            </p>
            <blockquote>
              <Quote />
              <span>
                “Cada cliente é única. Meu papel é entender o que realmente incomoda e criar um
                cuidado que faça sentido para ela.”
              </span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">Experiências reais</span>
              <h2>
                O cuidado também
                <br />
                se revela no sentir.
              </h2>
            </div>
            <p>Relatos espontâneos de clientes que viveram essa experiência.</p>
          </Reveal>
          <Reveal delay={100}>
            <TestimonialsCarousel items={testimonials} />
          </Reveal>
          <small className="results-note">
            As experiências são individuais e os resultados podem variar.
          </small>
        </div>
      </section>

      <InstagramFeed />

      <section className="section location" id="contato">
        <div className="container location-grid">
          <Reveal>
            <span className="eyebrow burgundy">Seu momento de cuidado</span>
            <h2>Visite o espaço</h2>
            <div className="info-block">
              <small>
                <MapPin /> Endereço
              </small>
              <p>{site.address}</p>
              <a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">
                Abrir no Google Maps <Arrow />
              </a>
            </div>
            <div className="info-block">
              <small>
                <Clock /> Horários
              </small>
              {site.hours.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
            <a
              className="button button-primary"
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp /> Agendar atendimento
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a className="map-card" href={site.mapsUrl} target="_blank" rel="noreferrer">
              <Image
                src="/images/espaco-atendimento.jpg"
                alt="Espaço de atendimento da Estética Isabella Mazzoni"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className="map-image"
              />
              <div className="map-shade" />
              <div className="map-caption">
                <strong>Santa Maria</strong>
                <small>Santo André · SP</small>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <Reveal>
            <span className="eyebrow burgundy">Dúvidas frequentes</span>
            <h2>Antes de agendar</h2>
            <p className="faq-lead">
              Respostas rápidas para você chegar ao atendimento com tranquilidade.
            </p>
          </Reveal>
          <Reveal delay={100}>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="final-cta">
        <Reveal className="container">
          <span className="eyebrow">Seu corpo merece atenção</span>
          <h2>
            Que tal reservar um
            <br />
            <em>momento para você?</em>
          </h2>
          <p>Fale com a Isabella e encontre o cuidado ideal para o seu momento.</p>
          <a
            className="button button-light"
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp /> Conversar pelo WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}
