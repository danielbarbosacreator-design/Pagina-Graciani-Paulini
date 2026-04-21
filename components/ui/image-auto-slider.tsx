import React from 'react';

const images: { src: string; label?: string; module?: number; position?: string; scale?: string }[] = [
  { src: "/images/IMG_0511.JPG.jpeg", module: 1, label: "Comece por aqui", position: "object-[center_5%]", scale: "scale-150" },
  { src: "/images/IMG_0518.JPG.jpeg", module: 2, label: "Um novo começo", position: "object-[right_5%]", scale: "scale-150" },
  { src: "/images/IMG_0369.JPG.jpeg", module: 3, label: "Clareza para prosperar", position: "object-[center_2%]", scale: "scale-100" },
  { src: "/images/IMG_4003.JPG.jpeg", module: 4, label: "Bônus Especiais", position: "object-top" },
];

const duplicated = [...images, ...images];

export const ImageAutoSlider = () => (
  <>
    <style>{`
      @keyframes slider-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .slider-track {
        animation: slider-scroll 60s linear infinite;
        touch-action: pan-y;
      }
      .slider-mask {
        mask: linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%);
        -webkit-mask: linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%);
      }
    `}</style>

    <div className="slider-mask w-full overflow-hidden" style={{ touchAction: 'pan-y' }}>
      <div className="slider-track flex gap-4 w-max items-start">
        {duplicated.map((item, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col gap-2">
            <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden border border-white/[0.04] hover:border-gold/20 transition-colors duration-300">
              <img
                src={item.src}
                alt=""
                className={`w-full h-full object-cover ${item.position ?? 'object-center'} ${item.scale ?? ''} brightness-[0.75] hover:brightness-90 transition-all duration-300`}
                loading="lazy"
              />
            </div>
            {item.label && (
              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold/50">
                  Módulo {item.module}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 text-center">
                  {item.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
);
