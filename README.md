# 출첵 (ChulCheck) - 동아리 출석체크 플랫폼

출첵은 대학 동아리 및 소모임을 위한 간편한 출석 관리 시스템입니다. QR코드와 PIN 코드를 사용한 스마트한 출석체크, 실시간 통계 분석, 다양한 역할 관리 기능으로 동아리 운영을 효율적으로 도와줍니다.

![출첵 로고](public/placeholder-logo.svg)

## 주요 기능

- **QR코드/PIN 출석체크**: 각 세션마다 고유한 QR코드 생성 및 PIN 코드 부여
- **실시간 통계**: 출석률, 지각률, 개인별 참여도를 시각적으로 분석
- **다중 역할 관리**: 운영진과 일반 부원 간 자동 UI 분리
- **CSV 데이터 내보내기**: 연명부와 출석 데이터를 손쉽게 다운로드
- **간편한 부원 관리**: 부원 정보 관리 및 편집 기능

## 기술 스택

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: React Hooks
- **Authentication**: Next Auth

## 시작하기

### 사전 요구사항

- Node.js 18 이상
- pnpm 패키지 관리자

### 설치

1. 저장소 클론
   ```bash
   git clone https://github.com/your-username/chulcheck.git
   cd chulcheck
   ```

2. 의존성 설치
   ```bash
   pnpm install
   ```

3. 환경 변수 설정
   ```bash
   cp .env.example .env.local
   # .env.local 파일을 열고 필요한 환경 변수를 설정하세요
   ```

4. 개발 서버 실행
   ```bash
   pnpm dev
   ```

5. 브라우저에서 `http://localhost:3000` 접속

### 빌드 및 배포

프로덕션 빌드를 위해:
```bash
pnpm build
pnpm start
```

## 프로젝트 구조

```
/app          - Next.js 앱 라우터
/components   - 재사용 가능한 UI 컴포넌트
/lib          - 유틸리티 함수 및 공통 로직
/public       - 정적 파일 (이미지, 폰트 등)
/styles       - 전역 스타일
/hooks        - 커스텀 React 훅
```

## SEO 및 소셜 미디어 공유 설정

이 프로젝트는 검색 엔진 최적화(SEO) 및 소셜 미디어 공유를 위한 다양한 메타 태그가 설정되어 있습니다:

- **메타데이터**: title, description, keywords 등 기본 메타 정보
- **Open Graph 태그**: 페이스북, 카카오톡 등에서 공유 시 표시되는 정보
- **Twitter Card**: 트위터에서 공유 시 표시되는 정보

**소셜 미디어 이미지 파일**:
- `public/og-image.png`: 소셜 미디어 공유용 이미지 (1200x630px 권장)
- `public/twitter-image.png`: 트위터 공유용 이미지 (1200x630px 권장)

**중요**: 위 이미지 파일들을 적절한 디자인으로 제작하여 추가해야 합니다.


## 감사의 말

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
