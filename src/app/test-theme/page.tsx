'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import Button from '@/components/ui/Button'

export default function TestThemePage() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [htmlClass, setHtmlClass] = useState('')

  useEffect(() => {
    if (mounted) {
      setHtmlClass(document.documentElement.className)
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-500 text-white">
        <div className="text-2xl">로딩 중...</div>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen p-8 transition-all duration-500"
      style={{
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">🧪 테마 테스트 페이지</h1>
        
        <div className="mb-8 p-6 border-2 rounded-lg" style={{
          borderColor: theme === 'dark' ? '#ffffff' : '#000000',
          backgroundColor: theme === 'dark' ? '#222222' : '#f0f0f0'
        }}>
          <h2 className="text-2xl font-bold mb-4">현재 상태</h2>
          <p className="text-lg mb-2">🎯 현재 테마: <strong>{theme}</strong></p>
          <p className="text-lg mb-2">📱 Mounted: <strong>{mounted ? 'Yes' : 'No'}</strong></p>
          <p className="text-sm font-mono mb-4">HTML Classes: {htmlClass}</p>
          
          <Button 
            onClick={toggleTheme}
            style={{
              backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
              color: theme === 'dark' ? '#000000' : '#ffffff',
              padding: '12px 24px',
              fontSize: '18px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            🔄 테마 전환 ({theme === 'dark' ? 'Light' : 'Dark'}로 변경)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tailwind 테스트 */}
          <div className="p-6 bg-white dark:bg-black text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Tailwind Dark Mode</h3>
            <p className="mb-4">이 카드는 Tailwind 다크모드를 사용합니다.</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">
                배경과 텍스트가 테마에 따라 변경되어야 합니다.
              </p>
            </div>
          </div>

          {/* 인라인 스타일 테스트 */}
          <div 
            className="p-6 border-2 rounded-lg"
            style={{
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f9f9f9',
              color: theme === 'dark' ? '#ffffff' : '#000000',
              borderColor: theme === 'dark' ? '#444444' : '#cccccc'
            }}
          >
            <h3 className="text-xl font-bold mb-4">인라인 스타일</h3>
            <p className="mb-4">이 카드는 인라인 스타일을 사용합니다.</p>
            <div 
              className="p-4 rounded"
              style={{
                backgroundColor: theme === 'dark' ? '#333333' : '#e0e0e0',
                color: theme === 'dark' ? '#cccccc' : '#333333'
              }}
            >
              <p>확실히 작동하는 스타일입니다.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
          <h3 className="text-lg font-bold mb-2">⚠️ 문제 확인</h3>
          <p>위의 두 카드가 다르게 보인다면 Tailwind 다크모드에 문제가 있습니다.</p>
          <p>두 카드가 모두 같은 색상으로 보인다면 정상입니다.</p>
        </div>
      </div>
    </div>
  )
} 