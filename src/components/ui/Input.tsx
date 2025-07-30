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
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-black-primary dark:text-white-primary mb-2 transition-colors duration-300"
        >
          {label}
        </label>
      )}
      
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-3 rounded-lg transition-all duration-300",
          "border-2 border-gray-200 dark:border-gray-600",
          "bg-white-primary dark:bg-black-primary",
          "text-black-primary dark:text-white-primary",
          "placeholder-gray-400 dark:placeholder-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-black-primary/20 dark:focus:ring-white-primary/20",
          "focus:border-black-primary dark:focus:border-white-primary",
          "hover:border-gray-300 dark:hover:border-gray-500",
          error && "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400 transition-colors duration-300">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default Input 