import React from 'react'
import Link from 'next/link'
import { Coffee, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-primary dark:bg-white-primary text-black-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-bold font-sans-kr">블랙스톤</span>
            </div>
            <p className="text-black-primary text-sm leading-relaxed transition-colors duration-300">
              최고급 원두로 만든 완벽한 커피를<br />
              블랙 앤 화이트의 세련된 공간에서<br />
              경험해보세요.
            </p>
          </div>

          {/* 매장 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">매장 정보</h3>
            <div className="space-y-3 text-sm text-black-primary transition-colors duration-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>서울특별시 강남구 테헤란로 123<br />블랙스톤 빌딩 1층</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>매일 07:00 - 22:00</span>
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block text-black-primary hover:text-gold-accent transition-colors">
                메뉴 보기
              </Link>
              <Link href="/contact" className="block text-black-primary hover:text-gold-accent transition-colors">
                창업 문의
              </Link>
              <Link href="/store" className="block text-black-primary hover:text-gold-accent transition-colors">
                매장 찾기
              </Link>
              <Link href="/news" className="block text-black-primary hover:text-gold-accent transition-colors">
                이벤트 & 소식
              </Link>
              <Link href="/contact" className="block text-black-primary hover:text-gold-accent transition-colors">
                고객센터
              </Link>
            </div>
          </div>

          {/* 소셜 미디어 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-black-primary hover:text-gold-accent transition-colors"
                aria-label="인스타그램"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-black-primary hover:text-gold-accent transition-colors"
                aria-label="페이스북"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-black-primary transition-colors duration-300">
              <p>최신 소식과 이벤트를</p>
              <p>소셜미디어에서 확인하세요!</p>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-700 dark:border-gray-200 mt-8 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-black-primary transition-colors duration-300">
              © 2024 블랙스톤 카페. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-black-primary transition-colors duration-300">
              <Link href="/privacy" className="hover:text-gold-accent transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-gold-accent transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 