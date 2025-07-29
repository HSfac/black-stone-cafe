import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Coffee, Clock, MapPin, Star, Users, TrendingUp, Award, CheckCircle, Quote } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { formatPrice } from '@/lib/utils'

// 인기 메뉴 데이터
const popularMenus = [
  {
    id: 1,
    name: '시그니처 아메리카노',
    description: '블랙스톤만의 특별한 블렌드로 만든 진한 아메리카노',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    badge: '베스트셀러',
    rating: 4.8
  },
  {
    id: 2,
    name: '바닐라 라떼',
    description: '부드러운 우유와 달콤한 바닐라의 완벽한 조화',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
    badge: '인기',
    rating: 4.7
  },
  {
    id: 3,
    name: '티라미수',
    description: '이탈리아 전통 레시피로 만든 진짜 티라미수',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    badge: 'NEW',
    rating: 4.9
  }
]

// 브랜드 특징 데이터
const features = [
  {
    icon: Award,
    title: '프리미엄 브랜드',
    description: '10년간 쌓아온 브랜드 신뢰도와 검증된 창업 시스템'
  },
  {
    icon: Users,
    title: '전문 교육',
    description: '체계적인 바리스타 교육과 매장 운영 노하우 전수'
  },
  {
    icon: TrendingUp,
    title: '지속적 성장',
    description: '매년 20% 이상의 매출 성장과 안정적인 수익 보장'
  },
  {
    icon: Coffee,
    title: '최고급 원두',
    description: '엄선된 스페셜티 커피와 독자적인 로스팅 기술'
  }
]

// 통계 데이터
const stats = [
  { number: '150+', label: '가맹점 수' },
  { number: '95%', label: '고객 만족도' },
  { number: '10년', label: '브랜드 역사' },
  { number: '24시간', label: '창업 상담' }
]

// 고객 후기 데이터
const testimonials = [
  {
    id: 1,
    name: '김민수',
    role: '강남점 점주',
    content: '체계적인 교육과 지원 덕분에 안정적으로 매장을 운영하고 있습니다. 블랙스톤과 함께해서 정말 좋았어요.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: '박지영',
    role: '홍대점 점주',
    content: '프리미엄 브랜드의 힘을 실감하고 있습니다. 고객들의 반응이 정말 좋고 매출도 꾸준히 증가하고 있어요.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
]

// 최신 소식 데이터
const news = [
  {
    id: 1,
    title: '신메뉴 출시: 딸기 크림 라떼',
    summary: '신선한 딸기와 부드러운 크림이 만나는 봄 한정 메뉴가 출시되었습니다',
    date: '2024.03.15',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    category: '신메뉴'
  },
  {
    id: 2,
    title: '블랙스톤 플래그십 스토어 오픈',
    summary: '더욱 세련되고 편안한 공간으로 새롭게 단장한 플래그십 스토어가 오픈했습니다',
    date: '2024.03.10',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop',
    category: '매장'
  }
]

export default function HomePage() {
  return (
    <div className="bg-white-primary">
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black-primary text-white-primary">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=1920&h=1080&fit=crop"
            alt="블랙스톤 카페 인테리어"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black-primary/60" />
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <div className="inline-block px-8 py-3 border border-white-primary/30 rounded-full text-white-primary/90 text-sm font-medium mb-8 backdrop-blur-sm">
              Premium Coffee Experience
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 font-serif-kr leading-none text-white-primary">
            블랙스톤
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl mb-16 text-gray-200 leading-relaxed max-w-5xl mx-auto font-light">
            <span className="block mb-4">최고급 원두로 만든 완벽한 커피를</span>
            <span className="block text-white-primary font-medium">블랙 앤 화이트의 세련된 공간에서</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/menu" className="flex items-center">
                메뉴 둘러보기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" asChild className="group bg-white-primary text-black-primary hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                창업 문의하기
              </Link>
            </Button>
          </div>
          
          {/* 스크롤 인디케이터 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white-primary/80">
              <span className="text-sm mb-3 font-medium">더 많은 정보 보기</span>
              <div className="w-6 h-10 border-2 border-white-primary/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white-primary/60 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 브랜드 통계 섹션 */}
      <section className="py-32 bg-white-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-4 border-2 border-black-primary/10 rounded-full text-black-primary font-semibold text-lg mb-8">
              성장하는 브랜드
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black-primary mb-8 font-serif-kr">
              숫자로 보는 블랙스톤
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              전국 고객들의 신뢰와 사랑으로 성장하고 있는 블랙스톤의 성과입니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white-primary border-2 border-gray-100 rounded-2xl p-10 hover:border-black-primary/20 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold text-black-primary mb-4 font-serif-kr">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 특징 섹션 */}
      <section className="py-32 bg-black-primary text-white-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif-kr">
              왜 블랙스톤일까요?
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              성공적인 카페 창업을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white-primary/5 border border-white-primary/10 rounded-2xl p-8 hover:bg-white-primary/10 hover:border-white-primary/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-20 h-20 bg-white-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                    <feature.icon className="h-10 w-10 text-black-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 메뉴 섹션 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-8 py-4 border-2 border-black-primary/10 rounded-full text-black-primary font-semibold text-lg mb-8">
              시그니처 메뉴
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black-primary mb-8 font-serif-kr">
              고객들이 사랑하는 메뉴
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              블랙스톤의 시그니처 메뉴로 특별한 맛의 경험을 선사합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {popularMenus.map((menu) => (
              <Card key={menu.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-black-primary/20">
                <div className="aspect-square relative overflow-hidden">
                  {/* 배지 */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      menu.badge === 'NEW' ? 'bg-black-primary text-white-primary' :
                      menu.badge === '베스트셀러' ? 'bg-white-primary text-black-primary border-2 border-black-primary' :
                      'bg-gray-600 text-white-primary'
                    }`}>
                      {menu.badge}
                    </span>
                  </div>
                  
                  {/* 실제 이미지 */}
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black-primary/0 group-hover:bg-black-primary/20 transition-all duration-300 z-10" />
                  
                  {/* 호버 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Button variant="secondary" size="lg" asChild>
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
                
                <Card.Body className="p-8 bg-white-primary">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-black-primary">
                      {menu.name}
                    </h3>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-black-primary fill-current mr-1" />
                      <span className="text-black-primary font-semibold text-sm">{menu.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {menu.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-black-primary font-serif-kr">
                      {formatPrice(menu.price)}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-black-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button variant="secondary" size="lg" asChild className="group">
              <Link href="/menu" className="flex items-center">
                전체 메뉴 보기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-32 bg-black-primary text-white-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif-kr">
              성공 스토리
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              블랙스톤과 함께 성공한 점주님들의 생생한 후기입니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white-primary/5 border border-white-primary/10 hover:border-white-primary/20 transition-all duration-300">
                <Card.Body className="p-10">
                  <Quote className="h-12 w-12 text-white-primary mb-6" />
                  <p className="text-xl text-gray-200 leading-relaxed mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-white-primary">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-white-primary fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 매장 소개 섹션 */}
      <section className="py-32 bg-white-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-8 py-4 border-2 border-black-primary/10 rounded-full text-black-primary font-semibold text-lg mb-10">
                브랜드 스토리
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-black-primary mb-10 font-serif-kr leading-tight">
                블랙 앤 화이트의<br />
                세련된 공간
              </h2>
              
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
                미니멀하면서도 고급스러운 인테리어로 꾸며진 블랙스톤 카페는 
                바쁜 일상 속에서 잠시 여유를 찾을 수 있는 특별한 공간입니다.
              </p>
              
              {/* 특징 목록 */}
              <div className="space-y-6 mb-12">
                {[
                  '최고급 스페셜티 원두만 사용',
                  '숙련된 바리스타의 정성스런 핸드드립',
                  '미니멀한 블랙 앤 화이트 인테리어',
                  '프리미엄 창업 시스템 제공'
                                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white-primary" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                  <Clock className="h-10 w-10 text-black-primary mb-6" />
                  <div className="font-bold text-black-primary mb-3 text-xl">운영시간</div>
                  <div className="text-gray-600 text-lg">매일 07:00 - 22:00</div>
                </div>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                  <MapPin className="h-10 w-10 text-black-primary mb-6" />
                  <div className="font-bold text-black-primary mb-3 text-xl">위치</div>
                  <div className="text-gray-600 text-lg">강남구 테헤란로 123</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/store">매장 정보 자세히 보기</Link>
                </Button>
                <Button variant="secondary" asChild size="lg" className="flex-1">
                  <Link href="/contact">창업 문의하기</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
                  alt="블랙스톤 카페 인테리어"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 소식 섹션 */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-8 py-4 border-2 border-black-primary/10 rounded-full text-black-primary font-semibold text-lg mb-8">
              최신 소식
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black-primary mb-8 font-serif-kr">
              블랙스톤의 새로운 소식
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              새로운 메뉴와 이벤트, 매장 소식을 가장 먼저 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {news.map((item) => (
              <Card key={item.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-black-primary/20">
                <div className="aspect-[16/9] relative overflow-hidden">
                  {/* 카테고리 배지 */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="inline-block px-4 py-2 bg-black-primary text-white-primary rounded-full text-sm font-bold">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* 실제 이미지 */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black-primary/0 group-hover:bg-black-primary/20 transition-all duration-300 z-10" />
                </div>
                
                <Card.Body className="p-10 bg-white-primary">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 font-semibold">{item.date}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-black-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-black-primary mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.summary}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button variant="secondary" size="lg" asChild className="group">
              <Link href="/news" className="flex items-center">
                모든 소식 보기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-32 bg-black-primary text-white-primary">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-8 py-4 border border-white-primary/30 rounded-full text-white-primary font-semibold text-lg mb-8 backdrop-blur-sm">
              지금 시작하세요
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-12 font-serif-kr leading-tight">
            <span className="block mb-4">블랙스톤 카페와</span>
            <span className="block">함께하세요</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed max-w-5xl mx-auto">
            검증된 브랜드, 체계적인 시스템으로<br />
            <span className="text-white-primary font-bold">성공적인 카페 창업을 시작해보세요</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact" className="flex items-center text-lg px-12 py-6">
                창업 문의하기
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="text" asChild className="border-2 border-white-primary/30 text-white-primary hover:bg-white-primary/10 hover:border-white-primary/50">
              <Link href="/store" className="text-lg px-12 py-6">매장 둘러보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
