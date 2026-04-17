import type React from "react"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function ShinyButton({ children, onClick, className = "", style }: ShinyButtonProps) {
  return (
    <button className={`shiny-cta ${className}`} onClick={onClick} style={style}>
      <span className="inline-flex items-center gap-3">{children}</span>
    </button>
  )
}
