ㅊ'use client'

import React, { useState } from 'react'
import { Calendar, Tag, Coffee } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// 뉴스 타입 정의
interface NewsItem {
  id: number
  title: string
  summary: string
  content: string
  date: string
  category: string
  image: string
  featured: boolean
}

// 뉴스 데이터
const newsData = [
  {
    id: 1,
    title: '신메뉴 출시: 딸기 크림 라떼',
    summary: '신선한 딸기와 부드러운 크림이 만나는 봄 한정 메뉴가 출시되었습니다.',
    content: '봄의 전령인 딸기를 활용한 특별한 라떼가 블랙스톤에 등장했습니다. 신선한 딸기와 부드러운 크림, 그리고 에스프레소의 완벽한 조화를 경험해보세요.',
    date: '2024.03.15',
    category: 'menu',
    image: '/images/strawberry-latte.jpg',
    featured: true
  },
  {
    id: 2,
    title: '블랙스톤 카페 리뉴얼 오픈',
    summary: '더욱 세련되고 편안한 공간으로 새롭게 단장했습니다.',
    content: '고객 여러분의 성원에 힘입어 블랙스톤 카페가 더욱 세련되고 편안한 공간으로 새롭게 단장했습니다. 블랙 앤 화이트의 미니멀한 디자인과 함께 더욱 특별한 경험을 선사하겠습니다.',
    date: '2024.03.10',
    category: 'store',
    image: '/images/store-renewal.jpg',
    featured: true
  },
  {
    id: 3,
    title: '3월 이벤트: 친구와 함께하는 커피 할인',
    summary: '3월 한 달간 2잔 이상 주문시 20% 할인 혜택을 제공합니다.',
    content: '따뜻한 봄을 맞아 소중한 사람과 함께하는 커피 시간을 위한 특별 이벤트를 준비했습니다. 3월 한 달간 2잔 이상 주문하시면 20% 할인 혜택을 받으실 수 있습니다.',
    date: '2024.03.01',
    category: 'event',
    image: '/images/march-event.jpg',
    featured: false
  },
  {
    id: 4,
    title: '바리스타 채용 공고',
    summary: '함께 성장할 열정적인 바리스타를 모집합니다.',
    content: '블랙스톤 카페에서 커피에 대한 열정과 고객 서비스 마인드를 가진 바리스타를 모집합니다. 경력자 우대하며, 신입도 환영합니다.',
    date: '2024.02.28',
    category: 'recruitment',
    image: '/images/recruitment.jpg',
    featured: false
  },
  {
    id: 5,
    title: '원두 소개: 에티오피아 시다모',
    summary: '이번 달의 스페셜 원두를 소개합니다.',
    content: '에티오피아 시다모 지역에서 재배된 고품질 아라비카 원두를 소개합니다. 화사한 꽃향과 깔끔한 산미가 특징인 이 원두로 특별한 커피를 즐겨보세요.',
    date: '2024.02.20',
    category: 'coffee',
    image: '/images/ethiopia-sidamo.jpg',
    featured: false
  },
  {
    id: 6,
    title: '영업시간 변경 안내',
    summary: '3월부터 영업시간이 일부 변경됩니다.',
    content: '고객 여러분께 더 나은 서비스를 제공하기 위해 3월부터 영업시간을 조정합니다. 평일 오픈 시간이 30분 앞당겨져 오전 6시 30분부터 영업합니다.',
    date: '2024.02.15',
    category: 'notice',
    image: '/images/hours-change.jpg',
    featured: false
  }
]

const categories = [
  { id: 'all', name: '전체', icon: Coffee },
  { id: 'menu', name: '신메뉴', icon: Coffee },
  { id: 'event', name: '이벤트', icon: Tag },
  { id: 'store', name: '매장소식', icon: Coffee },
  { id: 'notice', name: '공지사항', icon: Calendar },
  { id: 'coffee', name: '원두소개', icon: Coffee },
  { id: 'recruitment', name: '채용', icon: Coffee },
]

const getCategoryName = (categoryId: string) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : categoryId
}

const getCategoryColor = (categoryId: string) => {
  const colors: Record<string, string> = {
    menu: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    event: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    store: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    notice: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    coffee: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
    recruitment: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
  }
  return colors[categoryId] || 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory)

  const featuredNews = newsData.filter(news => news.featured)
  const regularNews = newsData.filter(news => !news.featured)

  if (selectedNews) {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* 뉴스 상세 페이지 */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Button 
              variant="secondary" 
              onClick={() => setSelectedNews(null)}
              className="mb-6"
            >
              ← 목록으로 돌아가기
            </Button>
            
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedNews.category)} transition-colors duration-300`}>
              {getCategoryName(selectedNews.category)}
            </span>
          </div>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-serif-kr transition-colors duration-300">
              {selectedNews.title}
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <Calendar className="h-4 w-4 mr-2" />
              {selectedNews.date}
            </div>
          </header>
          
          <div className="aspect-video relative overflow-hidden rounded-xl mb-8 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
            {/* 임시 이미지 */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
              <Coffee className="h-20 w-20 text-white opacity-60" />
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedNews.summary}
            </p>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 transition-colors duration-300">
              {selectedNews.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* 헤더 섹션 */}
      <section className="relative py-32 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 dark:border-black/50 rounded-full text-white dark:text-black text-sm font-medium mb-8 backdrop-blur-sm transition-colors duration-300">
              Latest News
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif-kr">
            뉴스 & 소식
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            블랙스톤의 최신 소식과 이벤트 정보를 확인해보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* 피처드 뉴스 */}
        {selectedCategory === 'all' && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 font-serif-kr transition-colors duration-300">
              주요 소식
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Card 
                  key={news.id} 
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
                    {/* 임시 이미지 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
                      <Coffee className="h-16 w-16 text-white opacity-60" />
                    </div>
                    
                    {/* 카테고리 배지 */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)} transition-colors duration-300`}>
                        {getCategoryName(news.category)}
                      </span>
                    </div>
                    
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                  
                  <Card.Body className="p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      {news.date}
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 transition-colors duration-300">
                      {news.summary}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* 일반 뉴스 */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 font-serif-kr transition-colors duration-300">
            {selectedCategory === 'all' ? '모든 소식' : getCategoryName(selectedCategory)}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <Card 
                key={news.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                onClick={() => setSelectedNews(news)}
              >
                <div className="aspect-video relative overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
                  {/* 임시 이미지 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
                    <Coffee className="h-12 w-12 text-white opacity-60" />
                  </div>
                  
                  {/* 카테고리 배지 */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)} transition-colors duration-300`}>
                      {getCategoryName(news.category)}
                    </span>
                  </div>
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                
                <Card.Body className="p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 transition-colors duration-300">
                    {news.summary}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* 결과 없음 */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                해당 카테고리의 소식이 없습니다
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                다른 카테고리를 선택해보세요
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 