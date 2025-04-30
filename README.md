# 출첵 (ChulCheck) - 랜딩 페이지

이 저장소는 출첵(ChulCheck) 서비스의 랜딩 페이지 코드를 포함하고 있습니다. 출첵은 대학 동아리 및 소모임을 위한 스마트한 출석 관리 솔루션입니다.

## 프로젝트 개요

이 랜딩 페이지는 출첵 서비스의 주요 기능과 가치를 소개하는 웹사이트입니다. Next.js, React, TypeScript 및 Tailwind CSS를 사용하여 구축되었습니다.

## 주요 섹션

랜딩 페이지는 다음과 같은 주요 섹션으로 구성되어 있습니다:

- **Hero Section**: 서비스 소개 및 핵심 가치 제안
- **Features Section**: 주요 기능 소개
- **Problem Section**: 출첵이 해결하는 문제점
- **Workflow Section**: 서비스 이용 방법 안내
- **Testimonials Section**: 사용자 후기
- **CTA Section**: 행동 유도 섹션
- **Waitlist Section**: 얼리 액세스 대기자 등록

## 기술 스택

- **Framework**: Next.js
- **Language**: TypeScript
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Icons**: Lucide React

## 개발 환경 설정

### 사전 요구사항

- Node.js 18 이상
- pnpm 패키지 관리자

### 설치 및 실행

1. 저장소 클론
   ```bash
   git clone https://github.com/your-username/chulcheck-landing.git
   cd chulcheck-landing
   ```

2. 의존성 설치
   ```bash
   pnpm install
   ```

3. 개발 서버 실행
   ```bash
   pnpm dev
   ```

4. 브라우저에서 `http://localhost:3000` 접속

### 빌드 및 배포

프로덕션 빌드를 위해:
```bash
pnpm build
pnpm start
```

## 프로젝트 구조

```
/app          - Next.js 앱 라우터
/components   - 랜딩 페이지의 각 섹션 컴포넌트
/public       - 정적 파일 (이미지, 로고 등)
/styles       - 전역 스타일
/lib          - 유틸리티 함수
/hooks        - 커스텀 React 훅
```

## SEO 및 소셜 미디어 공유 설정

이 랜딩 페이지는 검색 엔진 최적화(SEO) 및 소셜 미디어 공유를 위한 메타 태그 설정이 포함되어 있습니다:

- **메타데이터**: 제목, 설명, 키워드 등 기본 메타 정보
- **Open Graph 태그**: 페이스북, 카카오톡 등에서 공유 시 표시되는 정보
- **Twitter Card**: 트위터에서 공유 시 표시되는 정보

**소셜 미디어 이미지 파일**:
- `public/og-image.png`: 소셜 미디어 공유용 이미지 (1200x630px 권장)
- `public/twitter-image.png`: 트위터 공유용 이미지 (1200x630px 권장)

**중요**: 위 이미지 파일들을 적절한 디자인으로 제작하여 추가해야 합니다.

## 향후 계획
- 배포 및 SEO 테스트
- waitlist backend 연결
- email 양식 (출시안내) 제작

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
