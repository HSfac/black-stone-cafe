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
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // layout.tsx의 스크립트에서 이미 HTML 클래스를 적용했으므로
    // 현재 상태만 읽어와서 동기화
    const html = document.documentElement
    const currentTheme = html.classList.contains('light') ? 'light' : 'dark'
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    const html = document.documentElement
    
    // HTML 클래스 업데이트
    html.classList.remove('light', 'dark')
    html.classList.add(newTheme)
    
    // 상태 업데이트
    setTheme(newTheme)
    
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