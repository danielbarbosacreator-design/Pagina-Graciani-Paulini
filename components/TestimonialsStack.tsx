import * as React from "react"
import { CircularTestimonials } from "@/components/ui/circular-testimonials"

const TESTIMONIALS = [
  {
    name: "Jaqueline B.",
    designation: "Raio X",
    quote: "Em um encontro tive mais clareza do que anos tentando sozinha. Foi um divisor de águas na minha vida.",
    src: "/images/Jaque B1.jpg.jpeg",
  },
  {
    name: "Chandriele M.",
    designation: "TransformaMente",
    quote: "A Graciane tem um dom único de te fazer enxergar o que você não conseguia ver sozinha. Minha vida mudou completamente depois da mentoria.",
    src: "/images/Chandriele.jpg.jpeg",
  },
  {
    name: "Nayara Fleith Miranda",
    designation: "Transformação",
    quote: "Meu marido disse que valeu todo tempo e investimento dedicado. Houve grande transformação, primeiro em mim e depois na minha casa. Aprendi que não posso mudar as pessoas, nem ter expectativas sobre elas e isso é libertador!",
    src: "/images/Nayara-v2.jpg",
  },
  {
    name: "Adriana Beckert",
    designation: "Liberdade",
    quote: "Durante esse período, deixei de me esconder atrás dos meus medos e comecei a confiar na minha voz, me posicionando com segurança e clareza diante do que antes eu silenciava. Resumo: Liberdade.",
    src: "/images/Adriana-v2.jpg",
  },
  {
    name: "Eliane Correia",
    designation: "Propósito",
    quote: "Após a mentoria sei bem o que quero, sei meu valor e meus princípios, antes estava apenas sobrevivendo nesse mundo e agora encontrei meu propósito de vida. Superei meu maior medo da vida, finalizar a CNH e agora tenho autoconfiança para escolher meus clientes.",
    src: "/images/Eliane-v2.jpg",
  },
]

export const TestimonialsStack = () => (
  <div className="w-full flex justify-center py-8">
    <CircularTestimonials
      testimonials={TESTIMONIALS}
      autoplay={true}
      colors={{
        name: "#f7f7ff",
        designation: "#C5A059",
        testimony: "#a1a1aa",
        arrowBackground: "#1a1a1a",
        arrowForeground: "#f1f1f7",
        arrowHoverBackground: "#C5A059",
      }}
      fontSizes={{
        name: "1.4rem",
        designation: "0.75rem",
        quote: "0.9375rem",
      }}
    />
  </div>
)
