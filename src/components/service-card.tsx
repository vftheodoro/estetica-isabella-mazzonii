import Image from "next/image";
import type { Service } from "@/types/site";
import {
  Arrow,
  Clock,
  Droplet,
  Face,
  Heart,
  Leaf,
  Sparkle,
  Zap,
} from "./icons";
import { buildWhatsAppUrl, formatCurrency } from "@/utils/contact";

const icons = {
  droplet: Droplet,
  sparkle: Sparkle,
  leaf: Leaf,
  heart: Heart,
  face: Face,
  zap: Zap,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <article className={service.featured ? "service-card featured" : "service-card"}>
      {service.image ? (
        <div className="service-media">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 800px) 100vw, 33vw"
            className="service-media-image"
          />
          <div className="service-media-shade" />
          {service.featured && <span className="pill">Mais procurado</span>}
          <span className="service-icon-badge" aria-hidden="true">
            <Icon />
          </span>
        </div>
      ) : (
        <div className="service-icon-row">
          <span className="service-icon-badge" aria-hidden="true">
            <Icon />
          </span>
          {service.featured && <span className="pill inline">Mais procurado</span>}
        </div>
      )}

      <div className="service-body">
        <h3>{service.title}</h3>
        <span className="duration-tag">
          <Clock /> {service.duration ?? "1 hora"}
        </span>
        <p>{service.description}</p>
        <ul>
          {service.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="price-row">
          <div>
            <small>Sessão {service.duration && `· ${service.duration}`}</small>
            <strong>{formatCurrency(service.price)}</strong>
          </div>
          <div>
            <small>Pacote 4 sessões</small>
            <strong>{formatCurrency(service.packagePrice)}</strong>
          </div>
        </div>
        <a
          className="text-link"
          href={buildWhatsAppUrl(service.title, "site")}
          target="_blank"
          rel="noreferrer"
        >
          Quero agendar <Arrow />
        </a>
      </div>
    </article>
  );
}
