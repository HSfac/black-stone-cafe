'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X, MessageCircle, Phone } from 'lucide-react'
import Button from './Button'

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black-primary text-white-primary shadow-2xl border-t-2 border-white-primary/20">
      <div className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:block">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm sm:text-lg lg:text-xl truncate">
                  블랙스톤 카페 창업 문의
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-medium hidden sm:block">
                  성공적인 카페 창업을 위한 전문 컨설팅을 제공합니다
                </p>
                <p className="text-xs text-gray-200 font-medium sm:hidden">
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
              className="hidden lg:inline-flex font-semibold"
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
              className="font-bold text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
            >
              <Link href="/contact">
                <span className="sm:hidden">문의</span>
                <span className="hidden sm:inline">창업 문의</span>
              </Link>
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 sm:p-2 text-gray-200 hover:text-white-primary hover:bg-white-primary/10 rounded-full transition-all duration-200 flex-shrink-0"
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