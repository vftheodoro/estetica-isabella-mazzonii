import type { InstagramPost, Service, Testimonial } from "@/types/site";

export const site = {
  name: "Estética Isabella Mazzoni",
  shortName: "Isabella Mazzoni",
  phone: "5511911583753",
  phoneDisplay: "(11) 91158-3753",
  instagram: "estetica.isabellamazzoni",
  address: "Rua Comendador Antônio Benvenuto Bataglia, 394, Santa Maria, Santo André – SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Comendador%20Ant%C3%B4nio%20Benvenuto%20Bataglia%20394%20Santo%20Andr%C3%A9%20SP",
  hours: ["Terça a sexta, das 8h às 21h", "Sábado, das 8h às 18h"],
};

export const services: Service[] = [
  {
    slug: "drenagem-linfatica",
    title: "Drenagem Linfática",
    description: "Movimentos suaves para aliviar a sensação de inchaço e favorecer o bem-estar.",
    benefits: ["Sensação de leveza", "Cuidado personalizado", "Bem-estar corporal"],
    price: 70,
    packagePrice: 265,
    featured: true,
    image: "/images/drenagem-linfatica.jpg",
    icon: "droplet",
  },
  {
    slug: "drenomodeladora",
    title: "DrenoModeladora",
    description: "Drenagem e modelagem em um atendimento ajustado aos seus objetivos.",
    benefits: ["Drenagem e modelagem", "Atendimento individual", "Contorno corporal"],
    price: 70,
    packagePrice: 265,
    icon: "sparkle",
    image: "/images/drenomodeladora.jpg",
  },
  {
    slug: "massagem-modeladora",
    title: "Massagem Modeladora",
    description: "Manobras direcionadas para quem deseja cuidar do contorno corporal.",
    benefits: ["Cuidado corporal", "Técnica direcionada", "Rotina de autocuidado"],
    price: 70,
    packagePrice: 265,
    icon: "leaf",
    image: "/images/massagem-modeladora.jpg",
  },
  {
    slug: "massagem-relaxante",
    title: "Massagem Relaxante",
    description: "Uma pausa para reduzir tensões, desacelerar e recuperar a tranquilidade.",
    benefits: ["Relaxamento", "Alívio de tensões", "Momento de pausa"],
    price: 65,
    packagePrice: 260,
    image: "/images/massagem-relaxante.jpg",
    icon: "heart",
  },
  {
    slug: "drenagem-facial",
    title: "Drenagem Facial",
    description: "Movimentos delicados para promover conforto e leveza na região facial.",
    benefits: ["Toque suave", "Cuidado facial", "Sensação de leveza"],
    price: 50,
    packagePrice: 190,
    icon: "face",
    image: "/images/drenagem-facial.jpg",
  },
  {
    slug: "massagem-express",
    title: "Massagem Express",
    description: "Uma experiência objetiva para aliviar tensões nos dias de agenda cheia.",
    benefits: ["Atendimento rápido", "Alívio de tensões", "Praticidade"],
    duration: "35 min",
    price: 45,
    packagePrice: 170,
    icon: "zap",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "drenagem",
    image: "/images/drenagem-linfatica.jpg",
    caption: "Drenagem linfática para aliviar o inchaço e recuperar a leveza no corpo.",
    tag: "Drenagem",
  },
  {
    id: "espaco",
    image: "/images/espaco-atendimento.jpg",
    caption: "Um espaço acolhedor em Santa Maria, Santo André — pronto para o seu momento.",
    tag: "Espaço",
  },
  {
    id: "relaxante",
    image: "/images/massagem-relaxante.jpg",
    caption: "Massagem relaxante para desacelerar, soltar as tensões e respirar melhor.",
    tag: "Relaxante",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Me senti muito melhor após a massagem: mais leve, menos inchada e muito satisfeita com o cuidado.",
    label: "Cliente verificada",
  },
  {
    quote: "Estava muito inchada e senti uma diferença enorme depois do atendimento. Foi maravilhoso.",
    label: "Cliente verificada",
  },
  {
    quote: "A massagem foi maravilhosa. Saí desinchada, relaxada e me sentindo outra pessoa.",
    label: "Cliente verificada",
  },
  {
    quote: "Sua mão é super leve. Me senti muito bem e muito mais relaxada. Nota mil!",
    label: "Cliente verificada",
  },
  {
    quote: "A Isabella tem mãos de ouro. Vale muito a pena e eu recomendo.",
    label: "Cliente verificada",
  },
];
