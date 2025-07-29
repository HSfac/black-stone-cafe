'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MessageCircle, Clock, Star, Send, ChevronDown, ChevronUp } from 'lucide-react'
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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  })

  const filteredFaq = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const handleSubmitInquiry = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('필수 정보를 모두 입력해주세요.')
      return
    }

    // 실제 구현시 문의 데이터 저장
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.')
    setContactForm({ name: '', email: '', phone: '', category: '', message: '' })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="bg-white-primary">
      {/* 헤더 섹션 */}
      <section className="bg-black-primary text-white-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-kr">
            고객센터
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든지 문의해주세요
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 연락처 정보 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            연락처 정보
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <Card.Body>
                <Phone className="h-12 w-12 text-black-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black-primary mb-2">전화 문의</h3>
                <p className="text-gray-600 mb-4">02-1234-5678</p>
                <p className="text-sm text-gray-500">
                  평일 09:00-18:00<br />
                  (점심시간 12:00-13:00 제외)
                </p>
              </Card.Body>
            </Card>
            
            <Card className="text-center">
              <Card.Body>
                <Mail className="h-12 w-12 text-black-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black-primary mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-4">contact@blackstone.cafe</p>
                <p className="text-sm text-gray-500">
                  24시간 접수 가능<br />
                  1-2 영업일 내 답변
                </p>
              </Card.Body>
            </Card>
            
            <Card className="text-center">
              <Card.Body>
                <MessageCircle className="h-12 w-12 text-black-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black-primary mb-2">카카오톡 문의</h3>
                <p className="text-gray-600 mb-4">@블랙스톤카페</p>
                <p className="text-sm text-gray-500">
                  평일 09:00-18:00<br />
                  실시간 상담 가능
                </p>
              </Card.Body>
            </Card>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
              자주 묻는 질문
            </h2>
            
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* FAQ 목록 */}
            <div className="space-y-4">
              {filteredFaq.map((faq) => (
                <Card key={faq.id}>
                  <div 
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <Card.Body>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-black-primary pr-4">
                          Q. {faq.question}
                        </h3>
                        {expandedFaq === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                      
                      {expandedFaq === faq.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">
                            A. {faq.answer}
                          </p>
                        </div>
                      )}
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 문의하기 폼 */}
          <section>
            <h2 className="text-3xl font-bold text-black-primary mb-8 font-serif-kr">
              문의하기
            </h2>
            
            <Card>
              <Card.Body>
                <div className="space-y-6">
                  <Input
                    label="이름 *"
                    placeholder="이름을 입력해주세요"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  />
                  
                  <Input
                    label="이메일 *"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                  
                  <Input
                    label="연락처"
                    placeholder="연락처를 입력해주세요"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-black-primary mb-2">
                      문의 분류
                    </label>
                    <select
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white-primary text-black-primary focus:outline-none focus:border-black-primary"
                      value={contactForm.category}
                      onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                    >
                      <option value="">문의 분류를 선택해주세요</option>
                                           <option value="franchise">창업 문의</option>
                     <option value="menu">메뉴 관련</option>
                     <option value="store">매장 관련</option>
                     <option value="service">서비스 문의</option>
                     <option value="other">기타</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black-primary mb-2">
                      문의 내용 *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white-primary text-black-primary focus:outline-none focus:border-black-primary h-32 resize-none"
                      placeholder="문의 내용을 상세히 작성해주세요"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    />
                  </div>
                  
                  <Button onClick={handleSubmitInquiry} className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    문의 보내기
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </section>
        </div>

        {/* 고객 후기 */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-black-primary mb-8 text-center font-serif-kr">
            고객 후기
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewData.map((review) => (
              <Card key={review.id}>
                <Card.Body>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-black-primary">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              블랙스톤 카페를 방문해주신 고객님들의 소중한 후기입니다
            </p>
            <Button variant="secondary" asChild>
              <Link href="/contact">창업 문의하기</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
} 