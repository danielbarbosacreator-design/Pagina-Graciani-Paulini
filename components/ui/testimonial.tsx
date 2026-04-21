import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  role?: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, showArrows = true, showDots = true, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div ref={ref} className={cn("h-80 w-full flex items-center justify-center", className)} {...props}>
        <div className="relative w-80 h-72">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard = index === (currentIndex + 1) % testimonials.length
            const isNextCard = index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
                style={{ zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1 }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{ scale: 0.95, opacity: 0, y: isCurrentCard ? 0 : isPrevCard ? 8 : 16, rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4 }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.5 : 0.25,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-3 flex justify-between px-5">
                    <span className="text-xl select-none text-white/20 hover:text-gold/50 transition-colors">&larr;</span>
                    <span className="text-xl select-none text-white/20 hover:text-gold/50 transition-colors">&rarr;</span>
                  </div>
                )}

                <div className="p-7 flex flex-col items-center gap-4 h-full justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top border border-gold/20"
                  />
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-white/90 tracking-wide">{testimonial.name}</h3>
                    {testimonial.role && (
                      <p className="text-[11px] text-gold/50 uppercase tracking-[0.1em] mt-0.5">{testimonial.role}</p>
                    )}
                  </div>
                  <p className="text-center text-[13px] text-white/50 font-light leading-relaxed italic">
                    "{testimonial.description}"
                  </p>
                </div>
              </motion.div>
            )
          })}

          {showDots && (
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    index === currentIndex ? "bg-gold w-4" : "bg-white/20"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
