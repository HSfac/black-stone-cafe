import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium rounded-lg transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:scale-105 active:scale-95',
  ]

  const variantClasses = {
    primary: [
      'bg-black-primary hover:bg-black-soft',
      'dark:bg-white-primary dark:hover:bg-gray-100',
      'text-white-primary dark:text-black-primary',
      'shadow-md hover:shadow-lg',
      'focus:ring-black-primary dark:focus:ring-white-primary',
    ],
    secondary: [
      'bg-white-primary hover:bg-gray-50',
      'dark:bg-black-primary dark:hover:bg-black-soft',
      'text-black-primary dark:text-white-primary',
      'border-2 border-black-primary dark:border-white-primary',
      'hover:border-black-soft dark:hover:border-gray-200',
      'focus:ring-black-primary dark:focus:ring-white-primary',
    ],
    text: [
      'bg-transparent hover:bg-gray-100',
      'dark:hover:bg-gray-800',
      'text-black-primary dark:text-white-primary',
      'hover:text-black-soft dark:hover:text-gray-200',
      'focus:ring-black-primary dark:focus:ring-white-primary',
    ],
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const allClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  return (
    <Comp className={allClasses} {...props}>
      {children}
    </Comp>
  )
}

export default Button 