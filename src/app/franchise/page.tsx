'use client'

import React, { useState } from 'react'
import { Users, TrendingUp, Award, Phone, Mail, MessageCircle } from 'lucide-react'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setInquiryForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* 히어로 섹션 */}
      <section className="relative py-32 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 dark:border-black/50 rounded-full text-white dark:text-black text-sm font-medium mb-8 backdrop-blur-sm transition-colors duration-300">
              Franchise Opportunity
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif-kr">
            블랙스톤 카페 창업
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 transition-colors duration-300">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6 font-serif-kr transition-colors duration-300">
              블랙스톤 창업의 장점
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              성공적인 창업을 위한 모든 지원을 받으세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-black dark:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 창업 프로세스 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6 font-serif-kr transition-colors duration-300">
              창업 프로세스
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              체계적인 6단계 프로세스로 안전한 창업을 지원합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseSteps.map((step, index) => (
              <Card key={index} className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold mr-4 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* 창업 정보 */}
        <section className="mb-20 bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 transition-colors duration-300">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6 font-serif-kr transition-colors duration-300">
              창업 정보
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
              투명하고 합리적인 창업 비용
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300">가맹비</h3>
              <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">1,000만원</p>
            </Card>
            <Card className="text-center p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300">인테리어비</h3>
              <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">3,000만원</p>
            </Card>
            <Card className="text-center p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300">권리금</h3>
              <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">별도협의</p>
            </Card>
            <Card className="text-center p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300">필요면적</h3>
              <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">30평 이상</p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              * 상기 금액은 예상 금액이며, 실제 창업비용은 입지 및 규모에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section id="inquiry" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <div>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-8 font-serif-kr transition-colors duration-300">
              창업 문의
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              다양한 방법으로 언제든 연락주세요
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">전화 문의</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-1 transition-colors duration-300">02-1234-5678</p>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">평일 09:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">이메일 문의</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-1 transition-colors duration-300">franchise@blackstone.com</p>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">24시간 접수 가능</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">카카오톡 문의</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-1 transition-colors duration-300">@블랙스톤창업</p>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">실시간 상담 가능</p>
                </div>
              </div>
            </div>
          </div>

          {/* 문의 폼 */}
          <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
            <Card.Header className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">온라인 창업 문의</h3>
            </Card.Header>
            <Card.Body className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="이름 *"
                    name="name"
                    placeholder="이름을 입력해주세요"
                    value={inquiryForm.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  />
                  
                  <Input
                    label="연락처 *"
                    name="phone"
                    placeholder="010-0000-0000"
                    value={inquiryForm.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  />
                </div>
                
                <Input
                  label="이메일 *"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  value={inquiryForm.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                />
                
                <Input
                  label="희망 지역"
                  name="region"
                  placeholder="예: 서울시 강남구"
                  value={inquiryForm.region}
                  onChange={handleInputChange}
                  className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                />
                
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    창업 예산
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    value={inquiryForm.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">예산을 선택해주세요</option>
                    <option value="5000">5,000만원 이하</option>
                    <option value="7000">5,000 ~ 7,000만원</option>
                    <option value="10000">7,000만원 ~ 1억원</option>
                    <option value="over">1억원 이상</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    카페 운영 경험
                  </label>
                  <select
                    name="experience"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    value={inquiryForm.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">경험을 선택해주세요</option>
                    <option value="none">경험 없음</option>
                    <option value="1year">1년 미만</option>
                    <option value="3year">1-3년</option>
                    <option value="over3">3년 이상</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                    placeholder="창업 관련 문의사항을 자유롭게 작성해주세요"
                    value={inquiryForm.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  창업 문의 보내기
                </Button>
              </form>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  )
} 