'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import { RefreshCw, Play } from 'lucide-react'

const TestAnimationsPage = () => {
  const [activeAnimations, setActiveAnimations] = useState<{[key: string]: boolean}>({})

  const triggerAnimation = (animationKey: string) => {
    setActiveAnimations(prev => ({ ...prev, [animationKey]: false }))
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [animationKey]: true }))
    }, 100)
  }

  useEffect(() => {
    // 페이지 로드 시 모든 애니메이션 활성화
    const keys = ['typing', 'drip', 'stone', 'liquid', 'flip']
    keys.forEach(key => {
      setTimeout(() => {
        setActiveAnimations(prev => ({ ...prev, [key]: true }))
      }, 500)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-black-primary text-white-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif-kr">
            블랙스톤 애니메이션 테스트
          </h1>
          <p className="text-xl text-gray-200">
            다양한 헤로섹션 애니메이션 효과를 테스트해보세요
          </p>
        </div>
      </div>

      {/* 1. 타이핑 효과 + 글자별 Fade-in */}
      <section className="py-20 bg-white-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black-primary mb-4">1. 타이핑 효과 + 글자별 Fade-in</h2>
            <p className="text-gray-600 mb-6">각 글자가 타이핑 효과와 함께 순차적으로 나타납니다</p>
            <Button 
              onClick={() => triggerAnimation('typing')}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              다시 재생
            </Button>
          </div>
          
          <div className="min-h-[200px] flex items-center justify-center bg-black-primary rounded-2xl">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white-primary font-serif-kr">
                {['블', '랙', '스', '톤'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-500 ${
                      activeAnimations.typing 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                    style={{
                      transitionDelay: activeAnimations.typing ? `${index * 0.3}s` : '0s'
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span 
                  className={`inline-block w-1 h-16 bg-white-primary ml-2 ${
                    activeAnimations.typing ? 'animate-pulse' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: activeAnimations.typing ? '1.2s' : '0s'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 커피 드립 애니메이션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black-primary mb-4">2. 커피 드립 애니메이션</h2>
            <p className="text-gray-600 mb-6">커피가 드리핑되듯 글자가 위에서 아래로 흘러내립니다</p>
            <Button 
              onClick={() => triggerAnimation('drip')}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              다시 재생
            </Button>
          </div>
          
          <div className="min-h-[200px] flex items-center justify-center bg-black-primary rounded-2xl relative overflow-hidden">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white-primary font-serif-kr">
                {['블', '랙', '스', '톤'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-700 ease-out ${
                      activeAnimations.drip 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform -translate-y-32'
                    }`}
                    style={{
                      transitionDelay: activeAnimations.drip ? `${index * 0.2}s` : '0s',
                      filter: activeAnimations.drip ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' : 'none'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              {/* 드립 효과를 위한 장식 요소 */}
              {activeAnimations.drip && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-8 bg-white-primary rounded-full opacity-60 animate-bounce"
                      style={{
                        left: `${i * 20 - 20}px`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stone Breaking 효과 */}
      <section className="py-20 bg-white-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black-primary mb-4">3. Stone Breaking 효과</h2>
            <p className="text-gray-600 mb-6">돌이 깨지면서 글자가 나타나는 효과입니다</p>
            <Button 
              onClick={() => triggerAnimation('stone')}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              다시 재생
            </Button>
          </div>
          
          <div className="min-h-[200px] flex items-center justify-center bg-black-primary rounded-2xl">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white-primary font-serif-kr">
                {['블', '랙', '스', '톤'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-600 ${
                      activeAnimations.stone 
                        ? 'opacity-100 transform scale-100 rotate-0' 
                        : 'opacity-0 transform scale-150 rotate-12'
                    }`}
                    style={{
                      transitionDelay: activeAnimations.stone ? `${index * 0.15}s` : '0s',
                      filter: activeAnimations.stone 
                        ? 'none' 
                        : 'blur(2px) brightness(0.7)',
                      textShadow: activeAnimations.stone 
                        ? '2px 2px 4px rgba(0,0,0,0.3)' 
                        : 'none'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Liquid Motion (액체 움직임) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black-primary mb-4">4. Liquid Motion (액체 움직임)</h2>
            <p className="text-gray-600 mb-6">커피 크림처럼 부드럽게 흘러서 완성되는 효과입니다</p>
            <Button 
              onClick={() => triggerAnimation('liquid')}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              다시 재생
            </Button>
          </div>
          
          <div className="min-h-[200px] flex items-center justify-center bg-black-primary rounded-2xl">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white-primary font-serif-kr">
                {['블', '랙', '스', '톤'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-800 ease-in-out ${
                      activeAnimations.liquid 
                        ? 'opacity-100 transform scale-100 skew-x-0' 
                        : 'opacity-0 transform scale-50 skew-x-12'
                    }`}
                    style={{
                      transitionDelay: activeAnimations.liquid ? `${index * 0.2}s` : '0s',
                      filter: activeAnimations.liquid 
                        ? 'none' 
                        : 'blur(4px)',
                      transformOrigin: 'bottom center'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3D Flip & Rotation */}
      <section className="py-20 bg-white-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black-primary mb-4">5. 3D Flip & Rotation</h2>
            <p className="text-gray-600 mb-6">각 글자가 3D로 회전하면서 나타나는 효과입니다</p>
            <Button 
              onClick={() => triggerAnimation('flip')}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              다시 재생
            </Button>
          </div>
          
          <div className="min-h-[200px] flex items-center justify-center bg-black-primary rounded-2xl">
            <div className="text-center perspective-1000">
              <div className="text-6xl md:text-8xl font-bold text-white-primary font-serif-kr">
                {['블', '랙', '스', '톤'].map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-700 ${
                      activeAnimations.flip 
                        ? 'opacity-100 transform rotateY-0' 
                        : 'opacity-0 transform rotateY-180'
                    }`}
                    style={{
                      transitionDelay: activeAnimations.flip ? `${index * 0.2}s` : '0s',
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모든 효과 재생 버튼 */}
      <section className="py-16 bg-black-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => {
              const keys = ['typing', 'drip', 'stone', 'liquid', 'flip']
              setActiveAnimations({})
              keys.forEach((key, index) => {
                setTimeout(() => {
                  setActiveAnimations(prev => ({ ...prev, [key]: true }))
                }, (index + 1) * 200)
              })
            }}
            className="flex items-center gap-3"
          >
            <RefreshCw className="h-5 w-5" />
            모든 애니메이션 다시 재생
          </Button>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateY-0 {
          transform: rotateY(0deg);
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default TestAnimationsPage 