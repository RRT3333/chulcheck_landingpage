# 출첵 디자인 시스템 & CI 가이드

## 브랜드 아이덴티티

### 브랜드명
- 한글: 출첵
- 영문: Chulcheck

### 브랜드 컬러
- **Primary Color**: 
  - 메인 컬러 (Primary)
  - CSS Variable: `--primary`
  - 사용: CTA 버튼, 강조 텍스트, 아이콘

- **Secondary Colors**:
  - Mint: 민트 (액센트 컬러)
  - 투명도 30%로 사용: `bg-mint/30`
  - 사용: 배경 그라데이션, 장식 요소

### 타이포그래피

#### 폰트 패밀리
1. **Geist Sans**
   - 사용: 영문 헤드라인, 강조 텍스트
   - CSS Class: `font-geist`
   - 적용: `text-3xl` ~ `text-6xl` 크기의 헤드라인

2. **Noto Sans KR**
   - 사용: 한글 본문, 버튼 텍스트
   - CSS Class: `font-noto`
   - 적용: 기본 텍스트, 설명문

3. **Michroma**
   - 사용: 숫자, 통계 데이터
   - CSS Class: `font-michroma`
   - 적용: 통계 수치, 특별 강조 텍스트

#### 텍스트 스타일
- **헤드라인**
  - 크기: `text-3xl` ~ `text-6xl`
  - 굵기: `font-bold`
  - 자간: `tracking-tight`
  - 색상: `text-slate-900`

- **서브헤드라인**
  - 크기: `text-lg` ~ `text-2xl`
  - 굵기: `font-medium` ~ `font-bold`
  - 색상: `text-slate-800`

- **본문**
  - 크기: `text-base` ~ `text-lg`
  - 색상: `text-slate-600`

## 컴포넌트 시스템

### 버튼
#### Primary Button
```css
.button-primary {
  @apply h-12 sm:h-14 px-6 sm:px-8;
  @apply text-sm sm:text-base;
  @apply bg-white text-primary;
  @apply hover:bg-slate-50;
  @apply border border-slate-200;
  @apply transition-all duration-300;
  @apply transform hover:scale-105;
  @apply shadow-lg;
}
```

### 카드
#### Feature Card
```css
.feature-card {
  @apply bg-white rounded-xl;
  @apply p-4 md:p-6;
  @apply border border-slate-200;
  @apply shadow-sm hover:shadow-md;
  @apply transition-all;
  @apply hover:border-primary/30;
}
```

### 배경 패턴
#### Dot Pattern
```css
.bg-dot-pattern {
  @apply bg-[radial-gradient(#f0f4ff_1px,transparent_1px)];
  @apply [background-size:16px_16px];
  @apply opacity-30;
}
```

### 섹션 스페이싱
- Vertical Padding: `py-12 sm:py-16 md:py-24`
- Container Padding: `px-4 md:px-6`
- Component Gap: `gap-6 sm:gap-8 md:gap-16`

## 반응형 디자인

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### 반응형 텍스트
- 모바일: `text-sm` ~ `text-3xl`
- 태블릿: `sm:text-base` ~ `sm:text-4xl`
- 데스크톱: `md:text-lg` ~ `md:text-5xl`

## 접근성 가이드라인
1. 충분한 색상 대비
   - 텍스트/배경: WCAG 2.1 AA 기준 준수
   - Primary 컬러 위 텍스트: 흰색 사용

2. 반응형 이미지
   - `aspect-ratio` 유지
   - 적절한 `alt` 텍스트 제공

3. 포커스 상태
   - 키보드 네비게이션 지원
   - 포커스 표시자 명확히 표시

## 애니메이션 & 트랜지션
- 버튼 호버: `transition-all duration-300`
- 카드 호버: `transition-all`
- 스케일 효과: `transform hover:scale-105` 