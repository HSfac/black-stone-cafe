import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}) => {
  const generatedId = React.useId()
  const inputId = id || generatedId

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-black-primary mb-2"
        >
          {label}
        </label>
      )}
      
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-3 rounded-lg transition-all duration-300",
                  "border-2 border-gray-200",
        "bg-white-primary",
        "text-black-primary",
        "placeholder-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-black-primary/20",
        "focus:border-black-primary",
        "hover:border-gray-300",
        error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default Input 