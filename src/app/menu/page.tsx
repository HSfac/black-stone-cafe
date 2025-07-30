'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Coffee, Heart } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { formatPrice, getCategoryText } from '@/lib/utils'

// 임시 메뉴 데이터 (실제로는 Supabase에서 가져옴)
const menuData = [
  // 커피
  {
    id: '1',
    name: '시그니처 아메리카노',
    description: '블랙스톤만의 특별한 블렌드로 만든 진한 아메리카노',
    price: 4500,
    category: 'coffee',
    image_url: '/images/americano.jpg',
    is_available: true,
  },
  {
    id: '2',
    name: '카페 라떼',
    description: '부드러운 우유와 에스프레소의 완벽한 조화',
    price: 5000,
    category: 'coffee',
    image_url: '/images/latte.jpg',
    is_available: true,
  },
  {
    id: '3',
    name: '카푸치노',
    description: '풍성한 우유거품이 올라간 이탈리안 클래식',
    price: 5000,
    category: 'coffee',
    image_url: '/images/cappuccino.jpg',
    is_available: true,
  },
  {
    id: '4',
    name: '바닐라 라떼',
    description: '달콤한 바닐라 시럽이 들어간 부드러운 라떼',
    price: 5500,
    category: 'coffee',
    image_url: '/images/vanilla-latte.jpg',
    is_available: true,
  },
  {
    id: '5',
    name: '카라멜 마키아토',
    description: '달콤한 카라멜과 진한 에스프레소의 만남',
    price: 6000,
    category: 'coffee',
    image_url: '/images/caramel-macchiato.jpg',
    is_available: true,
  },

  // 음료
  {
    id: '6',
    name: '딸기 라떼',
    description: '신선한 딸기와 부드러운 우유의 조화',
    price: 6500,
    category: 'beverage',
    image_url: '/images/strawberry-latte.jpg',
    is_available: true,
  },
  {
    id: '7',
    name: '초콜릿 라떼',
    description: '진한 초콜릿과 우유의 달콤한 만남',
    price: 6000,
    category: 'beverage',
    image_url: '/images/chocolate-latte.jpg',
    is_available: true,
  },
  {
    id: '8',
    name: '그린티 라떼',
    description: '고급 말차를 사용한 부드러운 라떼',
    price: 5500,
    category: 'beverage',
    image_url: '/images/green-tea-latte.jpg',
    is_available: true,
  },
  {
    id: '9',
    name: '아이스티',
    description: '상큼한 레몬이 들어간 시원한 아이스티',
    price: 4000,
    category: 'beverage',
    image_url: '/images/iced-tea.jpg',
    is_available: true,
  },

  // 디저트
  {
    id: '10',
    name: '티라미수',
    description: '이탈리아 정통 레시피로 만든 진짜 티라미수',
    price: 7000,
    category: 'dessert',
    image_url: '/images/tiramisu.jpg',
    is_available: true,
  },
  {
    id: '11',
    name: '치즈케이크',
    description: '부드럽고 진한 크림치즈의 맛',
    price: 6500,
    category: 'dessert',
    image_url: '/images/cheesecake.jpg',
    is_available: true,
  },
  {
    id: '12',
    name: '초콜릿 브라우니',
    description: '진한 초콜릿이 가득한 촉촉한 브라우니',
    price: 5500,
    category: 'dessert',
    image_url: '/images/brownie.jpg',
    is_available: true,
  }
]

const categories = [
  { id: 'all', name: '전체', icon: Coffee },
  { id: 'coffee', name: '커피', icon: Coffee },
  { id: 'beverage', name: '음료', icon: Coffee },
  { id: 'dessert', name: '디저트', icon: Coffee },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMenus, setFilteredMenus] = useState(menuData)

  useEffect(() => {
    let filtered = menuData

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(menu => menu.category === selectedCategory)
    }

    // 검색 필터
    if (searchTerm) {
      filtered = filtered.filter(menu => 
        menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        menu.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredMenus(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* 헤더 섹션 */}
      <section className="relative py-32 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 dark:border-black/50 rounded-full text-white dark:text-black text-sm font-medium mb-8 backdrop-blur-sm transition-colors duration-300">
              Menu Collection
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif-kr">
            우리의 메뉴
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            최고급 원두로 만든 특별한 커피와 디저트를 만나보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 검색 및 필터 영역 */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* 검색 */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
                <Input
                  type="text"
                  placeholder="메뉴를 검색해보세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                />
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-3">
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
          </div>
        </div>

        {/* 메뉴 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMenus.map((menu) => (
            <Card key={menu.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
              <div className="aspect-square relative overflow-hidden bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
                {/* 임시 이미지 대신 그라데이션과 아이콘 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center transition-colors duration-300">
                  <Coffee className="h-16 w-16 text-white opacity-60" />
                </div>
                
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* 찜하기 버튼 */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300" />
                </button>
              </div>
              
              <Card.Body className="p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-black dark:text-white transition-colors duration-300">
                    {menu.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors duration-300">
                    {getCategoryText(menu.category)}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed transition-colors duration-300">
                  {menu.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black dark:text-white font-serif-kr transition-colors duration-300">
                    {formatPrice(menu.price)}
                  </span>
                  <Button 
                    size="sm" 
                    className={`${!menu.is_available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!menu.is_available}
                  >
                    {menu.is_available ? '주문하기' : '품절'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* 결과 없음 메시지 */}
        {filteredMenus.length === 0 && (
          <div className="text-center py-16">
            <Coffee className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4 transition-colors duration-300" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              다른 키워드로 검색해보세요
            </p>
          </div>
        )}

        {/* CTA 섹션 */}
        <div className="text-center bg-gray-50 dark:bg-gray-900 rounded-3xl p-16 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 font-serif-kr transition-colors duration-300">
            특별한 주문이 필요하신가요?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
            단체 주문이나 특별한 요청사항이 있으시면 언제든 연락해주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/store">매장 방문하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 