'use client'

import React from 'react'
import { Coffee } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme, mounted } = useTheme()

  // 마운트되기 전까지는 로딩 상태 표시
  if (!mounted) {
    return (
      <div className={cn(
        "relative p-3 rounded-full transition-all duration-300",
        "bg-gray-500 w-12 h-12 flex items-center justify-center",
        className
      )}>
        <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse" />
      </div>
    )
  }

  const handleToggle = () => {
    console.log('🔄 테마 토글 버튼 클릭!')
    toggleTheme()
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "relative p-3 rounded-full transition-all duration-300 group",
        // 확실한 배경색 설정
        theme === 'dark' 
          ? "bg-amber-800 hover:bg-amber-700 border-2 border-amber-600" 
          : "bg-amber-200 hover:bg-amber-300 border-2 border-amber-400",
        "focus:outline-none focus:ring-2 focus:ring-amber-500",
        "transform hover:scale-105 active:scale-95",
        "shadow-lg hover:shadow-xl",
        className
      )}
      style={{
        // 인라인 스타일로 확실하게 적용
        backgroundColor: theme === 'dark' ? '#b45309' : '#fde68a',
        borderColor: theme === 'dark' ? '#d97706' : '#f59e0b'
      }}
      aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
    >
      {/* 커피 아이콘 */}
      <Coffee 
        className="w-5 h-5 transition-all duration-300"
        style={{
          color: theme === 'dark' ? '#fbbf24' : '#92400e'
        }}
      />
      
      {/* 테마 인디케이터 */}
      <div 
        className="absolute top-1 right-1 w-2 h-2 rounded-full transition-all duration-300"
        style={{
          backgroundColor: theme === 'dark' ? '#60a5fa' : '#eab308'
        }}
      />
      
      {/* 툴팁 */}
      <div 
        className={cn(
          "absolute top-full right-0 mt-2 px-3 py-1.5 rounded-lg text-sm font-medium",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "pointer-events-none whitespace-nowrap shadow-lg z-50"
        )}
        style={{
          backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
          color: theme === 'dark' ? '#000000' : '#ffffff'
        }}
      >
        {theme === 'light' ? '🌙 다크 모드' : '☀️ 라이트 모드'}
        <div 
          className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent"
          style={{
            borderBottomColor: theme === 'dark' ? '#ffffff' : '#000000'
          }}
        />
      </div>
    </button>
  )
}

export default ThemeToggle 