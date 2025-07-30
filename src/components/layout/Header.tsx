'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'

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
    <header className="sticky top-0 z-50 bg-white-primary dark:bg-black-primary border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-black-primary dark:text-white-primary transition-colors duration-300" />
            <span className="text-2xl font-bold text-black-primary dark:text-white-primary font-sans-kr transition-colors duration-300">
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
                    ? "text-black-primary dark:text-white-primary border-b-2 border-black-primary dark:border-white-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-black-primary dark:hover:text-white-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA 버튼 및 테마 토글 */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link href="/contact">창업문의</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle className="p-2" />
            <button
              type="button"
              className="p-2 rounded-md text-black-primary dark:text-white-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black-primary dark:focus:ring-white-primary transition-colors duration-300"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white-primary dark:bg-black-primary border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors duration-fast",
                  pathname === item.href
                    ? "text-black-primary dark:text-white-primary bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 dark:text-gray-300 hover:text-black-primary dark:hover:text-white-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full" asChild>
                <Link href="/contact">창업문의</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 