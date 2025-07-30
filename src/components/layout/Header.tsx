'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'

// 여러 커피콩 아이콘 옵션들
const CoffeeBean = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5.5C8 16 10 17 12 17s4-1 5-2.5c1-1.5 2-3.5 2-5.5 0-4-3-7-7-7zm0 2c2.5 0 4.5 2 4.5 4.5 0 1.5-0.8 3-1.5 4-0.5 0.8-1.5 1.5-3 1.5s-2.5-0.7-3-1.5c-0.7-1-1.5-2.5-1.5-4C7.5 6 9.5 4 12 4z"/>
    <ellipse cx="12" cy="9" rx="2" ry="3" fill="currentColor" opacity="0.3"/>
  </svg>
)

// 좀 더 현실적인 커피콩 모양
const RealisticCoffeeBean = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 3C8.5 3 6 6 6 10c0 3 1.5 5.5 3 7 1 1 2.5 1.5 3 1.5s2-0.5 3-1.5c1.5-1.5 3-4 3-7 0-4-2.5-7-6-7z"/>
    <path d="M12 5c-0.5 0-1 0.5-1 1v8c0 0.5 0.5 1 1 1s1-0.5 1-1V6c0-0.5-0.5-1-1-1z" fill="white" opacity="0.8"/>
  </svg>
)

// 더 둥근 커피콩
const RoundCoffeeBean = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <ellipse cx="12" cy="12" rx="6" ry="9" fill="currentColor"/>
    <path d="M12 6c-1 0-2 1-2 2v8c0 1 1 2 2 2s2-1 2-2V8c0-1-1-2-2-2z" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
  </svg>
)

// 다중 커피콩
const MultipleCoffeeBeans = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <ellipse cx="8" cy="10" rx="3" ry="5" transform="rotate(-15 8 10)" fill="currentColor"/>
    <ellipse cx="16" cy="14" rx="3" ry="5" transform="rotate(15 16 14)" fill="currentColor"/>
    <path d="M8 7c-0.3 0-0.5 0.3-0.5 0.5v5c0 0.3 0.3 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-5c0-0.3-0.3-0.5-0.5-0.5z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" transform="rotate(-15 8 10)"/>
    <path d="M16 11c-0.3 0-0.5 0.3-0.5 0.5v5c0 0.3 0.3 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-5c0-0.3-0.3-0.5-0.5-0.5z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" transform="rotate(15 16 14)"/>
  </svg>
)

// 특별한 창업문의 버튼 컴포넌트 (여러 아이콘 옵션 제공)
const FranchiseButton = ({ iconType = "coffee-bean" }: { iconType?: "coffee" | "coffee-bean" | "realistic" | "round" | "multiple" }) => {
  // 아이콘 선택
  const IconComponent = {
    "coffee": Coffee,
    "coffee-bean": CoffeeBean,
    "realistic": RealisticCoffeeBean,
    "round": RoundCoffeeBean,
    "multiple": MultipleCoffeeBeans
  }[iconType] || CoffeeBean

  return (
    <div className="relative group">
      <Link 
        href="/contact"
        className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600/90 via-amber-500/90 to-amber-600/90 hover:from-amber-700/95 hover:via-amber-600/95 hover:to-amber-700/95 text-white backdrop-blur-sm rounded-full font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-amber-400/40 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/30 before:to-transparent before:pointer-events-none"
      >
        {/* 배경 커피콩 패턴 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-2 transform rotate-12">
            <IconComponent className="w-3 h-3 text-amber-200" />
          </div>
          <div className="absolute top-1 right-4 transform -rotate-45">
            <IconComponent className="w-2 h-2 text-amber-200" />
          </div>
          <div className="absolute bottom-1 left-6 transform rotate-45">
            <IconComponent className="w-2 h-2 text-amber-200" />
          </div>
          <div className="absolute bottom-0 right-2 transform -rotate-12">
            <IconComponent className="w-3 h-3 text-amber-200" />
          </div>
        </div>
        
        {/* 호버 시 떨어지는 커피콩 */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300">
          <IconComponent className="w-4 h-4 text-amber-200" />
        </div>
        
        {/* 메인 아이콘 */}
        <IconComponent className="w-5 h-5 z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* 텍스트 */}
        <span className="z-10 whitespace-nowrap">창업문의</span>
        
        {/* 반짝임 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-500"></div>
      </Link>
      
      {/* 호버 시 주변 커피콩 */}
      <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin">
        <IconComponent className="w-3 h-3 text-amber-600" />
      </div>
      <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce">
        <IconComponent className="w-3 h-3 text-amber-600" />
      </div>
      <div className="absolute -bottom-6 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:animate-pulse">
        <IconComponent className="w-3 h-3 text-amber-600" />
      </div>
      <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-800 group-hover:animate-spin">
        <IconComponent className="w-3 h-3 text-amber-600" />
      </div>
    </div>
  )
}

const navigation = [
  { name: '홈', href: '/' },
  { name: '메뉴', href: '/menu' },
  { name: '창업문의', href: '/contact' },
  { name: '매장정보', href: '/store' },
  { name: '소식', href: '/news' },
  { name: '고객센터', href: '/contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl shadow-black/20 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:pointer-events-none">
          <div className="flex justify-between items-center h-16 px-6">
            {/* 로고 */}
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-black-primary" />
              <span className="text-2xl font-bold text-black-primary font-sans-kr">
                블랙스톤
              </span>
            </Link>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors duration-fast",
                    pathname === item.href
                      ? "text-black-primary border-b-2 border-black-primary"
                      : "text-gray-600 hover:text-black-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA 버튼 */}
            <div className="hidden md:flex items-center">
              <FranchiseButton iconType="multiple" />
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 rounded-lg text-black-primary hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl shadow-black/20 p-4 space-y-2 transition-all duration-500 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:pointer-events-none relative">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                    pathname === item.href
                      ? "text-black-primary bg-white/60 shadow-sm"
                      : "text-gray-600 hover:text-black-primary hover:bg-white/40"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 flex justify-center">
                <FranchiseButton iconType="multiple" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 