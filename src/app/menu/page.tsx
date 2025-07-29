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
    description: '이탈리아 전통 디저트, 부드러운 마스카포네 치즈',
    price: 7000,
    category: 'dessert',
    image_url: '/images/tiramisu.jpg',
    is_available: true,
  },
  {
    id: '11',
    name: '치즈케이크',
    description: '진한 크림치즈로 만든 뉴욕 스타일 케이크',
    price: 6500,
    category: 'dessert',
    image_url: '/images/cheesecake.jpg',
    is_available: true,
  },
  {
    id: '12',
    name: '초콜릿 케이크',
    description: '진한 초콜릿과 부드러운 크림의 조화',
    price: 6000,
    category: 'dessert',
    image_url: '/images/chocolate-cake.jpg',
    is_available: true,
  },
  {
    id: '13',
    name: '마카롱 (5개)',
    description: '프랑스 전통 마카롱 5개 세트',
    price: 8000,
    category: 'dessert',
    image_url: '/images/macaron.jpg',
    is_available: true,
  },

  // 푸드
  {
    id: '14',
    name: '크루아상',
    description: '바삭하고 부드러운 프랑스 전통 페이스트리',
    price: 3500,
    category: 'food',
    image_url: '/images/croissant.jpg',
    is_available: true,
  },
  {
    id: '15',
    name: '클럽 샌드위치',
    description: '신선한 야채와 햄이 들어간 클럽 샌드위치',
    price: 8500,
    category: 'food',
    image_url: '/images/sandwich.jpg',
    is_available: true,
  },
  {
    id: '16',
    name: '베이글',
    description: '쫄깃한 베이글과 크림치즈',
    price: 5000,
    category: 'food',
    image_url: '/images/bagel.jpg',
    is_available: true,
  },
  {
    id: '17',
    name: '토스트',
    description: '바삭한 토스트와 잼',
    price: 4000,
    category: 'food',
    image_url: '/images/toast.jpg',
    is_available: true,
  }
]

const categories = [
  { id: 'all', name: '전체', icon: Coffee },
  { id: 'coffee', name: '커피', icon: Coffee },
  { id: 'beverage', name: '음료', icon: Coffee },
  { id: 'dessert', name: '디저트', icon: Heart },
  { id: 'food', name: '푸드', icon: Coffee },
]

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  is_available: boolean
}

export default function MenuPage() {
  const [menus] = useState<MenuItem[]>(menuData)
  const [filteredMenus, setFilteredMenus] = useState<MenuItem[]>(menuData)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading] = useState(false)

  // 필터링 로직
  useEffect(() => {
    let filtered = menus

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
  }, [menus, selectedCategory, searchTerm])

  return (
    <div className="bg-white-primary min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-black-primary text-white-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-kr">
            메뉴
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            최고급 원두와 신선한 재료로 만든 블랙스톤의 시그니처 메뉴를 만나보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 검색 및 필터 */}
        <div className="mb-12">
          {/* 검색바 */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="메뉴 검색..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-4">
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

        {/* 메뉴 결과 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black-primary">
              {selectedCategory === 'all' ? '전체 메뉴' : getCategoryText(selectedCategory)}
            </h2>
            <span className="text-gray-600">
              {filteredMenus.length}개 메뉴
            </span>
          </div>
        </div>

        {/* 메뉴 그리드 */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-black-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenus.map((menu) => (
              <Card key={menu.id} className="group">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  {/* 실제 구현시 Image 컴포넌트 사용 */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Coffee className="h-16 w-16 text-gray-400" />
                  </div>
                  {!menu.is_available && (
                    <div className="absolute inset-0 bg-black-primary bg-opacity-50 flex items-center justify-center">
                      <span className="text-white-primary font-semibold">품절</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black-primary opacity-0 group-hover:opacity-20 transition-opacity duration-normal" />
                </div>
                
                <Card.Body>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-black-primary group-hover:text-gray-700 transition-colors">
                      {menu.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {getCategoryText(menu.category)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {menu.description}
                  </p>
                  
                                     <div className="flex items-center justify-between">
                     <span className="text-xl font-bold text-black-primary">
                       {formatPrice(menu.price)}
                     </span>
                     <Button 
                       variant="primary" 
                       size="sm"
                       asChild
                     >
                       <Link href="/contact">문의하기</Link>
                     </Button>
                   </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        {/* 결과 없음 */}
        {filteredMenus.length === 0 && !loading && (
          <div className="text-center py-20">
            <Coffee className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-500">
              다른 검색어나 카테고리를 시도해보세요
            </p>
          </div>
        )}

        {/* CTA 섹션 */}
        <div className="mt-20 text-center bg-gray-50 rounded-lg py-12 px-8">
          <h3 className="text-2xl font-bold text-black-primary mb-4">
            블랙스톤 카페 창업에 관심이 있으신가요?
          </h3>
          <p className="text-gray-600 mb-6">
            검증된 메뉴와 시스템으로 성공적인 카페 사업을 시작하세요
          </p>
          <Button asChild size="lg">
            <Link href="/contact">창업 문의하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 