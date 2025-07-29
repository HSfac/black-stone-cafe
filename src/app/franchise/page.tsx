'use client'

import React, { useState } from 'react'
import { Check, Users, TrendingUp, Award, Phone, Mail, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'

const franchiseSteps = [
  {
    step: '01',
    title: '창업 문의',
    description: '온라인 문의서 작성 또는 전화 상담 신청',
  },
  {
    step: '02',
    title: '상담 및 설명',
    description: '브랜드 소개 및 창업 조건 상세 안내',
  },
  {
    step: '03',
    title: '입지 분석',
    description: '희망 지역의 상권 분석 및 입지 검토',
  },
  {
    step: '04',
    title: '계약 체결',
    description: '가맹계약서 작성 및 계약금 납부',
  },
  {
    step: '05',
    title: '인테리어',
    description: '매장 설계 및 인테리어 공사 진행',
  },
  {
    step: '06',
    title: '교육 및 오픈',
    description: '운영 교육 완료 후 그랜드 오픈',
  },
]

const benefits = [
  {
    icon: Award,
    title: '검증된 브랜드',
    description: '체계적인 시스템과 노하우로 안정적인 수익 창출',
  },
  {
    icon: Users,
    title: '전문 교육',
    description: '바리스타 교육부터 매장 운영까지 완벽 지원',
  },
  {
    icon: TrendingUp,
    title: '지속적인 성장',
    description: '신메뉴 개발 및 마케팅 지원으로 경쟁력 유지',
  },
]

export default function FranchisePage() {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    region: '',
    budget: '',
    experience: '',
    message: ''
  })

  const handleSubmitInquiry = async () => {
    if (!inquiryForm.name || !inquiryForm.phone || !inquiryForm.email) {
      alert('필수 정보를 모두 입력해주세요.')
      return
    }

    // 실제 구현시 창업 문의 데이터 저장
    alert('창업 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setInquiryForm({
      name: '',
      phone: '',
      email: '',
      region: '',
      budget: '',
      experience: '',
      message: ''
    })
  }

  return (
    <div className="bg-white-primary">
      {/* 히어로 섹션 */}
      <section className="bg-black-primary text-white-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif-kr">
            블랙스톤 카페 창업
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            검증된 브랜드, 체계적인 시스템으로<br />
            성공적인 카페 사업을 시작하세요
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="#inquiry">창업 문의하기</a>
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 창업 혜택 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black-primary mb-12 text-center font-serif-kr">
            블랙스톤 창업의 장점
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <benefit.icon className="h-16 w-16 text-black-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-black-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 창업 프로세스 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black-primary mb-12 text-center font-serif-kr">
            창업 프로세스
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseSteps.map((step, index) => (
              <Card key={index}>
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-black-primary text-white-primary rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-black-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* 창업 정보 */}
        <section className="mb-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            창업 정보
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black-primary mb-2">가맹비</h3>
              <p className="text-2xl font-bold text-black-primary">1,000만원</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black-primary mb-2">인테리어비</h3>
              <p className="text-2xl font-bold text-black-primary">3,000만원</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black-primary mb-2">권리금</h3>
              <p className="text-2xl font-bold text-black-primary">별도협의</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black-primary mb-2">필요면적</h3>
              <p className="text-2xl font-bold text-black-primary">30평 이상</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              * 상기 금액은 예상 금액이며, 실제 창업비용은 입지 및 규모에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section id="inquiry" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
              창업 문의
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-black-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-black-primary">전화 문의</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                  <p className="text-sm text-gray-500">평일 09:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-black-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-black-primary">이메일 문의</h3>
                  <p className="text-gray-600">franchise@blackstone.cafe</p>
                  <p className="text-sm text-gray-500">24시간 접수 가능</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-8 w-8 text-black-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-black-primary">카카오톡 문의</h3>
                  <p className="text-gray-600">@블랙스톤창업</p>
                  <p className="text-sm text-gray-500">실시간 상담 가능</p>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <Card>
            <Card.Header>
              <h3 className="text-xl font-semibold">온라인 창업 문의</h3>
            </Card.Header>
            <Card.Body>
              <div className="space-y-4">
                <Input
                  label="이름 *"
                  placeholder="이름을 입력해주세요"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                />
                
                <Input
                  label="연락처 *"
                  placeholder="010-0000-0000"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                />
                
                <Input
                  label="이메일 *"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                />
                
                <Input
                  label="희망 지역"
                  placeholder="예: 서울시 강남구"
                  value={inquiryForm.region}
                  onChange={(e) => setInquiryForm({...inquiryForm, region: e.target.value})}
                />
                
                <div>
                  <label className="block text-sm font-medium text-black-primary mb-2">
                    창업 예산
                  </label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white-primary text-black-primary focus:outline-none focus:border-black-primary"
                    value={inquiryForm.budget}
                    onChange={(e) => setInquiryForm({...inquiryForm, budget: e.target.value})}
                  >
                    <option value="">예산을 선택해주세요</option>
                    <option value="5000">5,000만원 이하</option>
                    <option value="7000">5,000 ~ 7,000만원</option>
                    <option value="10000">7,000만원 ~ 1억원</option>
                    <option value="over">1억원 이상</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black-primary mb-2">
                    카페 운영 경험
                  </label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white-primary text-black-primary focus:outline-none focus:border-black-primary"
                    value={inquiryForm.experience}
                    onChange={(e) => setInquiryForm({...inquiryForm, experience: e.target.value})}
                  >
                    <option value="">경험을 선택해주세요</option>
                    <option value="none">경험 없음</option>
                    <option value="1year">1년 미만</option>
                    <option value="3year">1-3년</option>
                    <option value="over3">3년 이상</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black-primary mb-2">
                    문의 내용
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white-primary text-black-primary focus:outline-none focus:border-black-primary h-24 resize-none"
                    placeholder="창업 관련 문의사항을 자유롭게 작성해주세요"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                  />
                </div>
                
                <Button onClick={handleSubmitInquiry} className="w-full">
                  창업 문의 보내기
                </Button>
              </div>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  )
} 