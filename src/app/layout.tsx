import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingBanner from '@/components/ui/FloatingBanner'
import { ThemeProvider } from '@/contexts/ThemeContext'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
})

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
})

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
      className={`${notoSansKR.variable} ${notoSerifKR.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body className="font-sans-kr antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
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
