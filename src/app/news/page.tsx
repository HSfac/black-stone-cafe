'use client'

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
    menu: 'bg-blue-100 text-blue-800',
    event: 'bg-red-100 text-red-800',
    store: 'bg-green-100 text-green-800',
    notice: 'bg-yellow-100 text-yellow-800',
    coffee: 'bg-purple-100 text-purple-800',
    recruitment: 'bg-gray-100 text-gray-800',
  }
  return colors[categoryId] || 'bg-gray-100 text-gray-800'
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory)

  const featuredNews = newsData.filter(item => item.featured)

  if (selectedNews) {
    return (
      <div className="bg-white-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            variant="text" 
            onClick={() => setSelectedNews(null)}
            className="mb-6"
          >
            ← 목록으로 돌아가기
          </Button>
          
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(selectedNews.category)}`}>
                  {getCategoryName(selectedNews.category)}
                </span>
                <span className="text-gray-500 text-sm">{selectedNews.date}</span>
              </div>
              <h1 className="text-4xl font-bold text-black-primary mb-4 font-serif-kr">
                {selectedNews.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {selectedNews.summary}
              </p>
            </header>
            
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-8">
              <Coffee className="h-24 w-24 text-gray-400" />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedNews.content}
              </p>
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white-primary">
      {/* 헤더 섹션 */}
      <section className="bg-black-primary text-white-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-kr">
            소식 & 이벤트
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            블랙스톤의 새로운 소식과 다양한 이벤트를 확인해보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 주요 소식 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
            주요 소식
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
              <Card key={news.id} className="group cursor-pointer" onClick={() => setSelectedNews(news)}>
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Coffee className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black-primary opacity-0 group-hover:opacity-20 transition-opacity duration-normal" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(news.category)}`}>
                      {getCategoryName(news.category)}
                    </span>
                  </div>
                </div>
                <Card.Body>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold text-black-primary mb-3 group-hover:text-gray-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {news.summary}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 카테고리 필터 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
            전체 소식
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* 뉴스 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <Card key={news.id} className="group cursor-pointer" onClick={() => setSelectedNews(news)}>
              <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Coffee className="h-12 w-12 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black-primary opacity-0 group-hover:opacity-20 transition-opacity duration-normal" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(news.category)}`}>
                    {getCategoryName(news.category)}
                  </span>
                </div>
              </div>
              <Card.Body>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {news.date}
                </div>
                <h3 className="text-lg font-semibold text-black-primary mb-2 group-hover:text-gray-700 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {news.summary}
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* 결과 없음 */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <Coffee className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              해당 카테고리의 소식이 없습니다
            </h3>
            <p className="text-gray-500">
              다른 카테고리를 확인해보세요
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 