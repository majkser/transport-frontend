import React, { JSX } from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
  h3: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight",
  h4: "text-xl sm:text-2xl lg:text-2xl font-semibold tracking-tight",
  p: "text-base sm:text-lg leading-7",
}

const baseElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
}

interface TypographyProps {
  variant?: keyof typeof variantClasses
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  as,
  children,
  className,
}) => {
  const Component = (as || baseElements[variant]) as keyof JSX.IntrinsicElements

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {children}
    </Component>
  )
}

export default Typography