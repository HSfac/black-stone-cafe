'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, MessageCircle, Phone, ChevronUp } from 'lucide-react'
import Button from './Button'

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gold-accent text-black-primary p-3 rounded-full shadow-lg hover:bg-gold-accent/80 hover:scale-110 transition-all duration-300 border-2 border-gold-accent/80 animate-bounce"
          aria-label="배너 열기"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md sm:max-w-lg z-50 bg-white text-black-primary shadow-2xl shadow-black/50 rounded-xl border-2 border-gold-accent/80 backdrop-blur-sm animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto px-3 py-4 sm:px-4 sm:py-5">
        <div className="flex items-center justify-between gap-2 sm:gap-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:block">
                <MessageCircle className="h-6 w-6 text-gold-accent animate-pulse" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm sm:text-lg lg:text-xl truncate">
                  블랙스톤 카페 창업 문의
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium hidden sm:block">
                  성공적인 카페 창업을 위한 전문 컨설팅을 제공합니다
                </p>
                <p className="text-xs text-gray-600 font-medium sm:hidden">
                  카페 창업 컨설팅
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4">
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="hidden lg:inline-flex font-semibold bg-gold-accent/20 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black-primary transition-all duration-300 shadow-lg hover:shadow-gold-accent/50"
            >
              <a href="tel:02-1234-5678">
                <Phone className="h-4 w-4 mr-1" />
                전화 문의
              </a>
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="font-bold text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 bg-gold-accent text-black-primary hover:bg-gold-accent/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold-accent/50"
            >
              <Link href="/contact">
                <span className="sm:hidden">문의</span>
                <span className="hidden sm:inline">창업 문의</span>
              </Link>
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 sm:p-2 text-gray-500 hover:text-gold-accent hover:bg-gold-accent/20 rounded-full transition-all duration-300 flex-shrink-0 hover:scale-110 border border-transparent hover:border-gold-accent/50"
              aria-label="배너 닫기"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingBanner 