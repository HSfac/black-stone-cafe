import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Coffee } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-primary flex items-center justify-center">
      <div className="text-center px-4">
        {/* 404 일러스트 */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-[120px] md:text-[200px] font-bold text-gray-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Coffee className="h-16 w-16 md:h-24 md:w-24 text-black-primary" />
            </div>
          </div>
        </div>

        {/* 메시지 */}
        <div className="mb-8 max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-primary mb-4 font-serif-kr">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            요청하신 페이지가 존재하지 않거나<br />
            주소가 잘못 입력되었습니다.
          </p>
        </div>

        {/* 네비게이션 옵션 */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              홈으로 돌아가기
            </Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link href="/contact">
              창업 문의하기
            </Link>
          </Button>
        </div>

        {/* 도움말 링크 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">다른 페이지를 찾고 계신가요?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/menu" className="text-black-primary hover:underline">
              메뉴 보기
            </Link>
            <Link href="/store" className="text-black-primary hover:underline">
              매장 정보
            </Link>
            <Link href="/news" className="text-black-primary hover:underline">
              소식 & 이벤트
            </Link>
            <Link href="/contact" className="text-black-primary hover:underline">
              고객센터
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 