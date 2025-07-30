import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Coffee, Clock, MapPin, Star, Users, TrendingUp, Award, CheckCircle, Quote } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { formatPrice } from '@/lib/utils'

// 브랜드 통계 데이터
const stats = [
  { number: '50+', label: '전국 매장수', icon: MapPin },
  { number: '10,000+', label: '월 평균 고객수', icon: Users },
  { number: '95%', label: '고객 만족도', icon: Star },
  { number: '200+', label: '일 평균 판매량', icon: Coffee },
]

// 브랜드 특징 데이터
const features = [
  {
    icon: Coffee,
    title: '프리미엄 원두',
    description: '세계 각지에서 엄선한 최고급 아라비카 원두만을 사용하여 깊고 풍부한 맛을 선사합니다'
  },
  {
    icon: Award,
    title: '브랜드 신뢰도',
    description: '국내 대표 카페 브랜드로서 검증된 품질과 서비스를 바탕으로 성공적인 창업을 지원합니다'
  },
  {
    icon: TrendingUp,
    title: '지속적 성장',
    description: '차별화된 메뉴 개발과 마케팅 전략으로 지속적인 매출 성장을 실현합니다'
  },
  {
    icon: CheckCircle,
    title: '체계적 운영',
    description: '표준화된 운영 시스템과 지속적인 교육을 통해 안정적인 매장 운영을 보장합니다'
  },
]

// 인기 메뉴 데이터
const popularMenus = [
  {
    id: 1,
    name: '시그니처 아메리카노',
    description: 'Black Stone만의 특별한 블렌드로 만든 진한 아메리카노. 깊은 풍미와 균형잡힌 바디감이 특징입니다.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    rating: 4.8,
    badge: 'NEW'
  },
  {
    id: 2,
    name: '바닐라 크림 라떼',
    description: '부드러운 바닐라 크림과 진한 에스프레소의 완벽한 조화. 달콤함과 진한 맛의 밸런스가 일품입니다.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
    rating: 4.9,
    badge: '베스트셀러'
  },
  {
    id: 3,
    name: '티라미수 케이크',
    description: '이탈리아 정통 레시피로 만든 진짜 티라미수. 마스카포네 치즈와 커피의 환상적인 조합입니다.',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop',
    rating: 4.7,
    badge: '시그니처'
  },
]

// 고객 리뷰 데이터
const reviews = [
  {
    id: 1,
    name: '김민수',
    review: '커피 맛이 정말 좋아요! 매장 분위기도 깔끔하고 작업하기 좋은 환경입니다.',
    rating: 5,
    date: '2024.03.15',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: '이지은',
    review: '바닐라 라떼 최고입니다. 온라인 주문도 편리하고 픽업도 빨라서 만족스러워요.',
    rating: 5,
    date: '2024.03.14',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: '박상현',
    review: '디자인이 심플하고 좋네요. 티라미수도 맛있었습니다.',
    rating: 4,
    date: '2024.03.13',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
]

// 최신 뉴스 데이터
const latestNews = [
  {
    id: 1,
    title: '신메뉴 출시: 딸기 크림 라떼',
    summary: '신선한 딸기와 부드러운 크림이 만나는 봄 한정 메뉴',
    date: '2024.03.15',
    category: '신메뉴',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Black Stone 카페 리뉴얼 오픈',
    summary: '더욱 세련되고 편안한 공간으로 새롭게 단장',
    date: '2024.03.10',
    category: '매장소식',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop'
  },
  {
    id: 3,
    title: '3월 이벤트: 친구와 함께하는 커피 할인',
    summary: '2잔 이상 주문시 20% 할인 혜택',
    date: '2024.03.01',
    category: '이벤트',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop'
  },
]

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-32">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=1920&h=1080&fit=crop"
            alt="Black Stone 카페 인테리어"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
              Premium Coffee Experience
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-none text-white tracking-wide">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <span className="inline-block opacity-0 animate-stone-drop" style={{ animationDelay: '0.2s' }}>B</span>
                <span className="inline-block opacity-0 animate-stone-drop" style={{ animationDelay: '0.3s' }}>L</span>
                <span className="inline-block opacity-0 animate-stone-drop" style={{ animationDelay: '0.4s' }}>A</span>
                <span className="inline-block opacity-0 animate-stone-drop" style={{ animationDelay: '0.5s' }}>C</span>
                <span className="inline-block opacity-0 animate-stone-drop" style={{ animationDelay: '0.6s' }}>K</span>
              </div>
              <div className="flex space-x-4">
                <span className="inline-block opacity-0 animate-stone-bounce" style={{ animationDelay: '0.8s' }}>S</span>
                <span className="inline-block opacity-0 animate-stone-bounce" style={{ animationDelay: '0.9s' }}>T</span>
                <span className="inline-block opacity-0 animate-stone-bounce" style={{ animationDelay: '1.0s' }}>O</span>
                <span className="inline-block opacity-0 animate-stone-bounce" style={{ animationDelay: '1.1s' }}>N</span>
                <span className="inline-block opacity-0 animate-stone-bounce" style={{ animationDelay: '1.2s' }}>E</span>
              </div>
            </div>
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-gray-200 leading-relaxed max-w-5xl mx-auto font-light">
            <span className="block mb-4">최고급 원두로 만든 완벽한 커피를</span>
            <span className="block text-white font-medium">블랙 앤 화이트의 세련된 공간에서</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/menu" className="flex items-center">
                메뉴 둘러보기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" asChild className="group bg-white text-black hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                창업 문의하기
              </Link>
            </Button>
          </div>
          
          {/* 스크롤 인디케이터 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-3 font-medium">더 많은 정보 보기</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 브랜드 통계 섹션 */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-serif-kr">
              검증된 브랜드 파워
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              전국 매장 운영 데이터로 입증된 Black Stone의 성공 스토리
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif-kr">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 특징 섹션 */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif-kr">
              왜 Black Stone일까요?
            </h2>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              성공적인 카페 창업을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-100">
                    <feature.icon className="h-10 w-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
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
            <div className="inline-block px-8 py-4 border-2 border-black/10 rounded-full text-black font-semibold text-lg mb-8">
              시그니처 메뉴
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 font-serif-kr">
              고객들이 사랑하는 메뉴
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Black Stone의 시그니처 메뉴로 특별한 맛의 경험을 선사합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {popularMenus.map((menu) => (
              <Card key={menu.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-black/20">
                <div className="aspect-square relative overflow-hidden">
                  {/* 배지 */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      menu.badge === 'NEW' ? 'bg-black text-white' :
                      menu.badge === '베스트셀러' ? 'bg-white text-black border-2 border-black' :
                      'bg-gray-600 text-white'
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />
                  
                  {/* 호버 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Button variant="secondary" size="lg" asChild>
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
                
                <Card.Body className="p-8 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-black">
                      {menu.name}
                    </h3>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-black fill-current mr-1" />
                      <span className="text-black font-semibold text-sm">{menu.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {menu.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-black font-serif-kr">
                      {formatPrice(menu.price)}
                    </span>
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/menu">자세히 보기</Link>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 리뷰 섹션 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 font-serif-kr">
              고객들의 생생한 후기
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Black Stone을 경험한 고객들의 진솔한 이야기를 들어보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <Card.Body className="p-8 bg-gray-50">
                  <div className="flex items-center mb-6">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-black">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-300" />
                    <p className="text-gray-700 leading-relaxed text-lg pl-6">
                      {review.review}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 매장 소개 섹션 */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 font-serif-kr">
                블랙 앤 화이트의<br />
                미니멀 공간
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                깔끔하고 세련된 인테리어로 특별한 커피 경험을 선사합니다. 
                업무나 휴식, 모임 등 다양한 목적에 최적화된 공간을 제공합니다.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                  <span className="text-lg text-gray-700">무료 Wi-Fi 및 콘센트 제공</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                  <span className="text-lg text-gray-700">조용한 작업 환경</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                  <span className="text-lg text-gray-700">프라이빗 미팅룸 예약 가능</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link href="/store">매장 정보 보기</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop"
                  alt="Black Stone 카페 매장 인테리어"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 플로팅 카드 */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-black">매일 오픈</p>
                    <p className="text-gray-600 text-sm">06:30 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 뉴스 섹션 */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 font-serif-kr">
              최신 소식
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Black Stone의 새로운 소식과 이벤트를 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Card key={news.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <Card.Body className="p-6 bg-gray-50">
                  <p className="text-gray-500 text-sm mb-3">{news.date}</p>
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {news.summary}
                  </p>
                  <Button variant="text" size="sm" asChild>
                    <Link href="/news">자세히 보기</Link>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/news">모든 소식 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-serif-kr">
            함께 성장할 파트너를 찾습니다
          </h2>
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
            검증된 브랜드 파워와 체계적인 시스템으로<br />
            성공적인 창업의 첫 걸음을 시작하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact" className="flex items-center">
                창업 문의하기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" asChild className="group bg-white text-black hover:bg-gray-100">
              <Link href="/franchise" className="flex items-center">
                가맹점 정보 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
