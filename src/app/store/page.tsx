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
    <div className="bg-white-primary">
      {/* 헤더 섹션 */}
      <section className="bg-black-primary text-white-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-kr">
            매장 정보
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            블랙 앤 화이트의 세련된 공간에서 완벽한 커피를 경험해보세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 매장 기본 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
              {storeInfo.name}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-black-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black-primary mb-1">주소</h3>
                  <p className="text-gray-600 leading-relaxed">{storeInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-black-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black-primary mb-1">연락처</h3>
                  <p className="text-gray-600">{storeInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-black-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black-primary mb-1">운영시간</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>평일: {storeInfo.hours.weekday}</p>
                    <p>주말: {storeInfo.hours.weekend}</p>
                    <p>공휴일: {storeInfo.hours.holiday}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">창업 문의하기</Link>
              </Button>
              <Button variant="secondary" asChild size="lg" className="w-full sm:w-auto ml-0 sm:ml-4">
                <a href="tel:02-1234-5678">전화 문의하기</a>
              </Button>
            </div>
          </div>
          
          {/* 지도 영역 */}
          <div>
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">지도</p>
                <p className="text-sm">실제 구현시 Google Maps 또는 Naver Map API 연동</p>
              </div>
            </div>
          </div>
        </div>

        {/* 시설 안내 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            시설 안내
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeInfo.facilities.map((facility, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <facility.icon className="h-12 w-12 text-black-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-black-primary mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 매장 갤러리 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            매장 갤러리
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {/* 실제 구현시 Image 컴포넌트 사용 */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Coffee className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black-primary opacity-0 group-hover:opacity-30 transition-opacity duration-normal" />
                </div>
                <Card.Body>
                  <h3 className="font-semibold text-black-primary mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 오시는 길 */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            오시는 길
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-black-primary mb-4">지하철</h3>
              <div className="space-y-3 text-gray-600">
                <p>• 2호선 강남역 3번 출구에서 도보 5분</p>
                <p>• 9호선 신논현역 1번 출구에서 도보 7분</p>
                <p>• 신분당선 강남역에서 도보 6분</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-black-primary mb-4">버스</h3>
              <div className="space-y-3 text-gray-600">
                <p>• 간선버스: 146, 740, 341, 360</p>
                <p>• 지선버스: 3412, 4419, 6411</p>
                <p>• 정류장: 강남역 정류장에서 하차</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-black-primary mb-4">자동차</h3>
              <div className="space-y-3 text-gray-600">
                <p>• 강남대로 → 테헤란로 진입</p>
                <p>• 블랙스톤 빌딩 지하 주차장 이용</p>
                <p>• 주차 요금: 최초 2시간 무료</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-black-primary mb-4">주의사항</h3>
              <div className="space-y-3 text-gray-600">
                <p>• 러시아워 시간대는 대중교통 이용 권장</p>
                <p>• 주차공간 한정으로 미리 확인 필요</p>
                <p>• 발렛파킹 서비스 제공 (유료)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 