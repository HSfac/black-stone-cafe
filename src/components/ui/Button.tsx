import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  asChild = false,
  ...props
}) => {
  const baseStyles = "font-semibold border-2 transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-black-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
  
  const variantStyles = {
    primary: "bg-black-primary text-white-primary border-black-primary hover:bg-white-primary hover:text-black-primary",
    secondary: "bg-white-primary text-black-primary border-black-primary hover:bg-black-primary hover:text-white-primary",
    text: "bg-transparent text-black-primary border-transparent hover:bg-gray-100 underline"
  }
  
  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    loading && "cursor-wait",
    className
  )

  if (asChild) {
    const child = children as React.ReactElement<Record<string, unknown>>
    return React.cloneElement(child, {
      className: cn(child.props.className as string, classes),
      ...(props as Record<string, unknown>)
    })
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          로딩중...
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button 