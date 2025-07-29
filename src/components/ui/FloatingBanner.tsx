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
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-xl">블랙스톤 카페 창업 문의</p>
                <p className="text-base text-gray-200 font-medium">
                  성공적인 카페 창업을 위한 전문 컨설팅을 제공합니다
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="hidden sm:inline-flex font-semibold"
            >
              <a href="tel:02-1234-5678">
                <Phone className="h-5 w-5 mr-2" />
                전화 문의
              </a>
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="font-bold text-lg px-8 py-3"
            >
              <Link href="/contact">
                창업 문의
              </Link>
            </Button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-200 hover:text-white-primary hover:bg-white-primary/10 rounded-full transition-all duration-200"
              aria-label="배너 닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingBanner 