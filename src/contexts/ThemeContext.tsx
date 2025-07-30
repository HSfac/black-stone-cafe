'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 기본 테마를 다크로 변경
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // 로컬스토리지에서 테마 가져오기 (기본값은 다크)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setTheme('light')
      applyTheme('light')
    } else {
      setTheme('dark')
      applyTheme('dark')
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement
    
    // 모든 클래스 제거 후 새 테마 적용
    html.classList.remove('light', 'dark')
    html.classList.add(newTheme)
    
    console.log(`테마 적용: ${newTheme}, HTML 클래스:`, html.className)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    console.log(`테마 전환: ${theme} → ${newTheme}`)
    
    setTheme(newTheme)
    applyTheme(newTheme)
    
    // 로컬스토리지에 저장
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 