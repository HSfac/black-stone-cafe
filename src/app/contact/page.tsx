'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, Star, Send, ChevronDown, ChevronUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'


// FAQ 데이터
const faqData = [
  {
    id: 1,
    question: '창업 문의는 어떻게 하나요?',
    answer: '홈페이지 상단의 "창업문의" 버튼을 클릭하거나 고객센터 페이지에서 창업 문의 폼을 작성해주세요. 전화나 이메일로도 문의하실 수 있습니다.',
    category: 'franchise'
  },
  {
    id: 2,
    question: '창업 비용은 얼마나 드나요?',
    answer: '가맹비 1,000만원, 인테리어비 약 3,000만원이 기본이며, 권리금은 입지에 따라 별도 협의됩니다. 상세한 비용은 상담을 통해 안내해드립니다.',
    category: 'franchise'
  },
  {
    id: 3,
    question: '창업 지원은 어떤 것들이 있나요?',
    answer: '매장 설계, 인테리어, 바리스타 교육, 운영 매뉴얼 제공, 지속적인 메뉴 개발 및 마케팅 지원을 해드립니다.',
    category: 'franchise'
  },
  {
    id: 4,
    question: '주차는 어디에 할 수 있나요?',
    answer: '블랙스톤 빌딩 지하 주차장을 이용하실 수 있습니다. 최초 2시간은 무료이며, 이후 시간당 2,000원의 주차 요금이 발생합니다.',
    category: 'store'
  },
  {
    id: 5,
    question: 'Wi-Fi 비밀번호가 무엇인가요?',
    answer: 'Wi-Fi 명: BlackStone_Free, 비밀번호: blackstone2024 입니다. 매장 내에서 자유롭게 이용하실 수 있습니다.',
    category: 'store'
  },
  {
    id: 6,
    question: '창업 교육은 어떻게 진행되나요?',
    answer: '계약 체결 후 본사에서 2주간 이론 및 실습 교육을 진행하며, 매장 오픈 후에도 지속적인 운영 지원을 해드립니다.',
    category: 'franchise'
  },
  {
    id: 7,
    question: '메뉴 개발은 어떻게 이루어지나요?',
    answer: '본사에서 시즌별 신메뉴를 개발하여 전 매장에 동시 출시하며, 지역 특성에 맞는 메뉴 개발도 지원합니다.',
    category: 'menu'
  },
  {
    id: 8,
    question: '매장 운영시간은 자유롭게 정할 수 있나요?',
    answer: '기본 운영시간은 권장사항이며, 지역 특성과 입지 조건에 따라 점주님과 협의하여 조정 가능합니다.',
    category: 'store'
  }
]

const reviewData = [
  {
    id: 1,
    name: '김민수',
    rating: 5,
    date: '2024.03.15',
    comment: '커피 맛이 정말 좋아요! 매장 분위기도 깔끔하고 작업하기 좋은 환경입니다. 자주 올 것 같아요.'
  },
  {
    id: 2,
    name: '이지은',
    rating: 5,
    date: '2024.03.14',
    comment: '바닐라 라떼 최고입니다. 온라인 주문도 편리하고 픽업도 빨라서 만족스러워요.'
  },
  {
    id: 3,
    name: '박상현',
    rating: 4,
    date: '2024.03.13',
    comment: '디자인이 심플하고 좋네요. 티라미수도 맛있었습니다. 주차공간이 좀 더 넓었으면 좋겠어요.'
  },
  {
    id: 4,
    name: '최유진',
    rating: 5,
    date: '2024.03.12',
    comment: '직원분들이 친절하고 커피도 맛있어요. 특히 시그니처 아메리카노 추천합니다!'
  }
]

const categories = [
  { id: 'all', name: '전체' },
  { id: 'franchise', name: '창업문의' },
  { id: 'store', name: '매장' },
  { id: 'menu', name: '메뉴' },
  { id: 'service', name: '서비스' },
  { id: 'etc', name: '기타' },
]

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const filteredFaqs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    console.log('Form submitted:', formData)
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <section className="relative py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block px-8 py-3 border border-white/50 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
              Contact Us
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif-kr">
            연락처
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            궁금한 점이 있으시거나 창업 문의가 있으시면 언제든 연락해주세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 연락처 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center p-8 border border-gray-200 bg-white">
                          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">전화 문의</h3>
            <p className="text-gray-600 mb-4">평일 09:00 - 18:00</p>
            <p className="text-2xl font-bold text-black">02-1234-5678</p>
          </Card>

          <Card className="text-center p-8 border border-gray-200 bg-white">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">이메일 문의</h3>
            <p className="text-gray-600 mb-4">24시간 접수 가능</p>
            <p className="text-lg font-semibold text-black">contact@blackstone.com</p>
          </Card>

          <Card className="text-center p-8 border border-gray-200 bg-white">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">카카오톡 상담</h3>
            <p className="text-gray-600 mb-4">실시간 상담 가능</p>
            <p className="text-lg font-semibold text-black">@블랙스톤카페</p>
          </Card>
        </div>

        {/* FAQ 섹션 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif-kr">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              블랙스톤 카페에 대해 자주 문의하시는 질문들을 확인해보세요
            </p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ 목록 */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id} className="border border-gray-200 bg-white">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* 문의 폼 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 문의 폼 */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6 font-serif-kr">
              문의하기
            </h2>
            <p className="text-gray-600 mb-8">
              아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="이름"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-50 border-gray-200"
                />
                <Input
                  label="전화번호"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-50 border-gray-200"
                />
              </div>

              <Input
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-50 border-gray-200"
              />

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  문의 유형
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">선택해주세요</option>
                  <option value="franchise">창업 문의</option>
                  <option value="menu">메뉴 문의</option>
                  <option value="store">매장 문의</option>
                  <option value="service">서비스 문의</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  placeholder="문의하실 내용을 자세히 작성해주세요..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                문의 보내기
              </Button>
            </form>
          </div>

          {/* 고객 후기 */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6 font-serif-kr">
              고객 후기
            </h2>
            <p className="text-gray-600 mb-8">
              블랙스톤을 이용해주신 고객들의 소중한 후기입니다.
            </p>

            <div className="space-y-6">
              {reviewData.map((review) => (
                <Card key={review.id} className="p-6 border border-gray-200 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-black">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 