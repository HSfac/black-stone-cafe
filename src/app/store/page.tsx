import React from 'react'
import Link from 'next/link'
import { MapPin, Clock, Phone, Wifi, Car, Coffee, Users } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const storeInfo = {
  name: '블랙스톤 카페',
  address: '서울특별시 강남구 테헤란로 123, 블랙스톤 빌딩 1층',
  phone: '02-1234-5678',
  hours: {
    weekday: '07:00 - 22:00',
    weekend: '08:00 - 23:00',
    holiday: '09:00 - 21:00'
  },
  facilities: [
    { icon: Wifi, name: 'Wi-Fi', description: '무료 고속 인터넷' },
    { icon: Car, name: '주차', description: '건물 내 주차 가능 (2시간 무료)' },
    { icon: Coffee, name: '테이크아웃', description: '포장 주문 가능' },
    { icon: Users, name: '단체석', description: '최대 12명까지 이용 가능' },
  ]
}

const galleryImages = [
  { id: 1, title: '매장 외관', description: '블랙 앤 화이트의 세련된 외관' },
  { id: 2, title: '내부 인테리어', description: '미니멀하고 모던한 공간' },
  { id: 3, title: '바리스타 존', description: '전문 바리스타가 정성껏 준비하는 커피' },
  { id: 4, title: '스터디 공간', description: '조용하고 편안한 작업 공간' },
  { id: 5, title: '테라스 좌석', description: '야외에서 즐기는 여유로운 시간' },
  { id: 6, title: '단체석', description: '회의나 모임을 위한 넓은 공간' },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <section className="relative py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
              Store Information
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif-kr">
            매장 정보
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            블랙 앤 화이트의 세련된 공간에서 완벽한 커피를 경험해보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 매장 기본 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-black mb-8 font-serif-kr">
              {storeInfo.name}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">주소</h3>
                  <p className="text-gray-600 leading-relaxed">{storeInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">연락처</h3>
                  <p className="text-gray-600 text-lg">{storeInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">운영시간</h3>
                  <div className="text-gray-600 space-y-1">
                    <p className="text-lg">평일: <span className="font-semibold">{storeInfo.hours.weekday}</span></p>
                    <p className="text-lg">주말: <span className="font-semibold">{storeInfo.hours.weekend}</span></p>
                    <p className="text-lg">공휴일: <span className="font-semibold">{storeInfo.hours.holiday}</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1">
                <Link href="/contact">창업 문의하기</Link>
              </Button>
              <Button variant="secondary" asChild size="lg" className="flex-1">
                <a href="tel:02-1234-5678">전화 문의하기</a>
              </Button>
            </div>
          </div>
          
          {/* 지도 영역 */}
          <div>
            <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-500">
                <MapPin className="h-20 w-20 mx-auto mb-6" />
                <p className="text-2xl font-bold mb-2">매장 위치</p>
                <p className="text-lg">강남역 3번 출구 도보 5분</p>
                <p className="text-sm mt-4 text-gray-400">지도 API 연동 예정</p>
              </div>
            </div>
          </div>
        </div>

        {/* 시설 안내 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 font-serif-kr">
              시설 안내
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              편안하고 쾌적한 환경에서 최고의 커피를 즐겨보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storeInfo.facilities.map((facility, index) => (
              <Card key={index} className="text-center p-8 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <facility.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 매장 갤러리 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 font-serif-kr">
              매장 갤러리
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              블랙스톤 카페의 세련된 공간을 미리 만나보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  {/* 임시 이미지 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <Coffee className="h-16 w-16 text-white opacity-60" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <Card.Body className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">
                    {image.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 오시는 길 */}
        <section className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 font-serif-kr">
              오시는 길
            </h2>
            <p className="text-xl text-gray-600">
              다양한 교통수단으로 편리하게 방문하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">지하철</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• 2호선 강남역 3번 출구에서 도보 5분</p>
                <p className="text-lg">• 9호선 신논현역 1번 출구에서 도보 7분</p>
                <p className="text-lg">• 신분당선 강남역에서 도보 6분</p>
              </div>
            </Card>
            
            <Card className="p-8 border border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">버스</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• 간선버스: 146, 740, 341, 360</p>
                <p className="text-lg">• 지선버스: 3412, 4419, 6411</p>
                <p className="text-lg">• 정류장: 강남역 정류장에서 하차</p>
              </div>
            </Card>
            
            <Card className="p-8 border border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">자동차</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• 강남대로 → 테헤란로 진입</p>
                <p className="text-lg">• 블랙스톤 빌딩 지하 주차장 이용</p>
                <p className="text-lg">• 주차 요금: 최초 2시간 무료</p>
              </div>
            </Card>
            
            <Card className="p-8 border border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">주의사항</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• 러시아워 시간대는 대중교통 이용 권장</p>
                <p className="text-lg">• 주차공간 한정으로 미리 확인 필요</p>
                <p className="text-lg">• 발렛파킹 서비스 제공 (유료)</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
} 