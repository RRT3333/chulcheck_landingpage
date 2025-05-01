# 출첵 API 연동 가이드

## API 엔드포인트 구조

### 기본 설정
- Base URL: `https://api.chulcheck.kr`
- API 버전: `v1`
- 기본 요청 형식: `https://api.chulcheck.kr/v1/{endpoint}`

### Waitlist API 엔드포인트

#### 1. 웨이트리스트 등록
```
POST /v1/waitlist/register
Content-Type: application/json

{
  "email": string,
  "organization": string,
  "role": string,
  "memberCount": number,
  "contactPreference": boolean
}
```

## 프론트엔드 구현 가이드

### 1. API 클라이언트 설정
```typescript
// src/lib/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.chulcheck.kr/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### 2. API 요청 함수 구현
```typescript
// src/lib/api/waitlist.ts
import { apiClient } from './client';

export interface WaitlistFormData {
  email: string;
  organization: string;
  role: string;
  memberCount: number;
  contactPreference: boolean;
}

export const registerWaitlist = async (data: WaitlistFormData) => {
  return await apiClient.post('/waitlist/register', data);
};
```

### 3. 컴포넌트 연동 위치
```typescript
// components/waitlist-section.tsx의 form submit 핸들러에서 구현
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  try {
    const response = await registerWaitlist(formData);
    // 성공 처리
  } catch (error) {
    // 에러 처리
  }
};
```

## 에러 처리 가이드

### HTTP 상태 코드
- 200: 성공
- 400: 잘못된 요청 (입력값 오류)
- 429: 너무 많은 요청
- 500: 서버 오류

### 프론트엔드 에러 처리
```typescript
try {
  await registerWaitlist(formData);
  showSuccessMessage("웨이트리스트 등록이 완료되었습니다!");
} catch (error) {
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 400:
        showError("입력 정보를 확인해주세요.");
        break;
      case 429:
        showError("잠시 후 다시 시도해주세요.");
        break;
      default:
        showError("서버 오류가 발생했습니다.");
    }
  }
}
```

## 보안 고려사항

### CORS 설정
백엔드에서 다음 도메인 허용 필요:
- `https://chulcheck.kr`
- `https://www.chulcheck.kr`
- 개발환경: `http://localhost:3000`

### API 요청 제한
- Rate Limiting: IP당 시간당 50회
- 스팸 방지: reCAPTCHA 또는 hCaptcha 통합 고려

## 환경별 설정

### 개발 환경
```typescript
// .env.development
NEXT_PUBLIC_API_URL=http://localhost:8000/v1
```

### 프로덕션 환경
```typescript
// .env.production
NEXT_PUBLIC_API_URL=https://api.chulcheck.kr/v1
```

## 모니터링 및 로깅

### 클라이언트 사이드 로깅
- 에러 발생시 Sentry 또는 LogRocket으로 전송
- 사용자 행동 분석을 위한 Google Analytics 연동

### API 응답 시간 모니터링
- 응답 시간이 1초 이상인 경우 경고
- 에러율 1% 이상시 알림 설정

## 테스트 전략

### API 통합 테스트
```typescript
// __tests__/api/waitlist.test.ts
describe('Waitlist API', () => {
  it('should successfully register a new waitlist entry', async () => {
    const mockData = {
      email: 'test@example.com',
      organization: '테스트 동아리',
      role: '회장',
      memberCount: 30,
      contactPreference: true
    };
    
    const response = await registerWaitlist(mockData);
    expect(response.status).toBe(200);
  });
});
``` 