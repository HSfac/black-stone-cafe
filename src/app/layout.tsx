import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingBanner from '@/components/ui/FloatingBanner'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: '블랙스톤 카페 - 프리미엄 커피 전문점',
  description: '최고급 원두로 만든 완벽한 커피를 블랙 앤 화이트의 세련된 공간에서 경험해보세요.',
  keywords: '카페, 커피, 블랙스톤, 프리미엄, 원두, 라떼, 아메리카노, 디저트',
  authors: [{ name: '블랙스톤 카페' }],
  robots: 'index, follow',
  openGraph: {
    title: '블랙스톤 카페 - 프리미엄 커피 전문점',
    description: '최고급 원두로 만든 완벽한 커피를 블랙 앤 화이트의 세련된 공간에서 경험해보세요.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '블랙스톤 카페 - 프리미엄 커피 전문점',
    description: '최고급 원두로 만든 완벽한 커피를 블랙 앤 화이트의 세련된 공간에서 경험해보세요.',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="ko" 
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Serif+KR:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans-kr antialiased bg-white text-black min-h-screen">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pb-16 sm:pb-20">
              {children}
            </main>
            <Footer />
            <FloatingBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
