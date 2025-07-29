import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>
  Body: React.FC<CardBodyProps>
  Footer: React.FC<CardFooterProps>
} = ({ children, className, hover = true, onClick }) => {
  return (
    <div
      className={cn(
        "bg-white-primary border border-gray-200 shadow transition-all duration-normal",
        hover && "hover:shadow-card-hover hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn("p-6 border-b border-gray-200", className)}>
      {children}
    </div>
  )
}

const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  )
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn("p-6 border-t border-gray-200", className)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card 