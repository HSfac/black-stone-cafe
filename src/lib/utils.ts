import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// 가격 포맷팅 함수
export function formatPrice(price: number): string {
  return price.toLocaleString('ko-KR') + '원'
}

// 전화번호 포맷팅 함수
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return phone
}

// 날짜 포맷팅 함수
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 픽업 시간 생성 함수
export function generatePickupTimes(): string[] {
  const times: string[] = []
  const now = new Date()
  const startTime = new Date(now.getTime() + 30 * 60000) // 30분 후부터
  
  for (let i = 0; i < 24; i++) { // 24개 슬롯 (30분 간격)
    const time = new Date(startTime.getTime() + i * 30 * 60000)
    const hours = time.getHours()
    const minutes = time.getMinutes()
    
    // 영업시간 체크 (07:00 - 22:00)
    if (hours >= 7 && hours < 22) {
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
      times.push(timeString)
    }
  }
  
  return times
}

// 주문 상태 한글 변환
export function getOrderStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    'pending': '주문 접수',
    'preparing': '준비 중',
    'ready': '준비 완료',
    'completed': '완료',
    'cancelled': '취소됨'
  }
  
  return statusMap[status] || status
}

// 메뉴 카테고리 한글 변환
export function getCategoryText(category: string): string {
  const categoryMap: Record<string, string> = {
    'coffee': '커피',
    'beverage': '음료',
    'dessert': '디저트',
    'food': '푸드'
  }
  
  return categoryMap[category] || category
} 