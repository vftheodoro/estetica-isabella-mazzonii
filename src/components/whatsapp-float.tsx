import { WhatsApp } from "./icons";
import { buildWhatsAppUrl } from "@/utils/contact";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Isabella pelo WhatsApp"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <WhatsApp />
    </a>
  );
}
