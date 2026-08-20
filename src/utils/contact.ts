import { site } from "@/config/site";
export const formatCurrency=(value:number)=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(value);
export function buildWhatsAppUrl(service?:string,source="site"){const message=service?`Olá, Isabella! Conheci seu trabalho pelo ${source} e gostaria de agendar ${service}.`:`Olá, Isabella! Conheci seu trabalho pelo ${source} e gostaria de informações sobre os atendimentos.`;return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`}
