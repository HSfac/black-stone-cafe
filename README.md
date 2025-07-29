# 블랙스톤 카페 웹사이트

> 블랙 앤 화이트 테마의 모던한 카페 웹사이트

## 🎯 프로젝트 개요

블랙스톤 카페는 최고급 원두로 만든 완벽한 커피를 블랙 앤 화이트의 세련된 공간에서 제공하는 프리미엄 카페입니다. 이 웹사이트는 온라인 주문 시스템과 매장 정보를 제공하여 고객 경험을 향상시키는 것을 목표로 합니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Fonts**: Noto Sans KR, Noto Serif KR

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary Black**: #000000
- **Pure White**: #FFFFFF
- **Charcoal**: #2C2C2C
- **Light Gray**: #F5F5F5
- **Accent Gray**: #808080

### 핵심 디자인 원칙
- **미니멀리즘**: 불필요한 요소 제거, 깔끔한 레이아웃
- **고급스러움**: 블랙 앤 화이트로 시크하고 세련된 느낌
- **가독성**: 충분한 여백과 대비로 쉬운 정보 습득
- **일관성**: 전체 페이지에서 동일한 디자인 언어 사용

## 📱 주요 기능

### ✅ 완료된 기능
- [x] 반응형 웹 디자인
- [x] 헤더 & 푸터 레이아웃
- [x] 홈페이지 (히어로 섹션, 인기 메뉴, 매장 소개, 최신 소식)
- [x] 디자인 시스템 구현
- [x] Supabase 설정 및 데이터베이스 스키마

### 🚧 진행 중인 기능
- [ ] 메뉴 페이지
- [ ] 온라인 주문 시스템
- [ ] 매장 정보 페이지
- [ ] 고객센터 페이지
- [ ] 관리자 페이지

### 📋 예정된 기능
- [ ] 실시간 주문 현황
- [ ] 결제 시스템 연동
- [ ] 이메일/SMS 알림
- [ ] 리뷰 시스템
- [ ] 다국어 지원

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn
- Supabase 계정

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd black-stone-cafe
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **환경 변수 설정**
   `.env.example` 파일을 `.env.local`로 복사하고 값을 설정:
   ```bash
   cp .env.example .env.local
   ```

   필요한 환경 변수:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Supabase 데이터베이스 설정**
   `src/lib/database-schema.sql` 파일의 SQL을 Supabase에서 실행

5. **개발 서버 실행**
   ```bash
   npm run dev
   ```

6. **브라우저에서 확인**
   `http://localhost:3000`에서 웹사이트 확인

## 📁 프로젝트 구조

```
black-stone-cafe/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── page.tsx        # 홈페이지
│   │   └── globals.css     # 글로벌 스타일
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── ui/            # UI 컴포넌트 (Button, Card, Input 등)
│   │   └── layout/        # 레이아웃 컴포넌트 (Header, Footer)
│   └── lib/               # 유틸리티 및 설정
│       ├── supabase.ts    # Supabase 클라이언트
│       ├── utils.ts       # 유틸리티 함수
│       └── database-schema.sql # 데이터베이스 스키마
├── public/                # 정적 파일
├── tailwind.config.ts     # Tailwind CSS 설정
└── README.md             # 프로젝트 문서
```

## 🗄️ 데이터베이스 스키마

### 주요 테이블
- **menus**: 메뉴 정보 (이름, 설명, 가격, 카테고리, 이미지)
- **orders**: 주문 정보 (고객 정보, 픽업 시간, 상태, 총액)
- **order_items**: 주문 상세 (메뉴, 수량, 옵션)

## 🎨 컴포넌트 가이드

### Button 컴포넌트
```tsx
// Primary 버튼
<Button variant="primary">클릭하세요</Button>

// Secondary 버튼  
<Button variant="secondary">클릭하세요</Button>

// Link와 함께 사용
<Button asChild>
  <Link href="/menu">메뉴 보기</Link>
</Button>
```

### Card 컴포넌트
```tsx
<Card>
  <Card.Header>
    <h3>제목</h3>
  </Card.Header>
  <Card.Body>
    <p>내용</p>
  </Card.Body>
  <Card.Footer>
    <Button>액션</Button>
  </Card.Footer>
</Card>
```

## 🚀 배포

### Vercel 배포
1. Vercel 계정 연결
2. GitHub 저장소 연결
3. 환경 변수 설정
4. 자동 배포 완료

### 환경 변수 설정 (Production)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 📖 추가 문서

- [기획서](./블랙스톤_카페_웹사이트_기획서.md)
- [디자인 시스템](./블랙스톤_카페_디자인시스템_기획서.md)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 📞 연락처

프로젝트 관련 문의: [이메일 주소]

---

*블랙스톤 카페 - 블랙 앤 화이트의 완벽한 조화* ☕
