// Add here because button styles are used in several components

export const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "border border-border bg-secondary text-secondary-foreground hover:bg-transparent",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      icon: "bg-background hover:bg-muted size-9"
    },
    size: {
      default: "h-6 md:h-8 px-3 py-2 text-xs",
      sm: "text-xs h-6 px-3",
      lg: "h-11 rounded-md px-8",
      "icon-sm": "h-8 w-8",
      icon: "size-9"
    },
    disabled: {
      true: "pointer-events-none opacity-50"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})
