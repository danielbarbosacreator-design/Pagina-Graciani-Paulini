import * as React from "react"
import { CircularTestimonials } from "@/components/ui/circular-testimonials"

const TESTIMONIALS = [
  {
    name: "Eliane S.",
    designation: "Inteligência Financeira",
    quote: "Aprendi a me relacionar com o dinheiro de uma forma que nunca imaginei. A Graciane tem uma forma única de ensinar que transforma de verdade.",
    src: "/images/Eliane.jpg.jpeg",
    objectPosition: "center 0%",
  },
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
    name: "Natiele R.",
    designation: "Mente Próspera",
    quote: "O método dela transforma a mentalidade de verdade. Os resultados vieram rápido. Recomendo de olhos fechados para qualquer mulher que queira crescer!",
    src: "/images/Natiele1.jpg.jpeg",
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
