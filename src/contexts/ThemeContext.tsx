'use client'

import React from 'react'

// 단순화된 ThemeProvider - 블랙 앤 화이트 테마로 고정
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 