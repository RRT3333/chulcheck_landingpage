아주 좋은 피드백입니다!  
랜딩 페이지의 색상과 분위기를 60-30-10 컬러룰에 맞춰 개선하는 방법을 아래와 같이 제안합니다.

---

## 1. 60-30-10 컬러룰이란?
- **60%**: 주 배경(Neutral, 밝은 톤)  
- **30%**: 서브 컬러(보조, 액센트, 섹션 구분)  
- **10%**: 포인트 컬러(CTA, 강조, 아이콘 등)

---

## 2. 현재 디자인 시스템 분석

- **Primary**: 강렬한 블루 (`--primary`)
- **Secondary**: 민트 (`bg-mint/30`)
- **배경**: 거의 화이트
- **텍스트**: 진한 네이비/블랙

---

## 3. 개선 제안 (60-30-10 적용)

### 60%: **밝은 뉴트럴 배경**
- `bg-white` 또는 `bg-slate-50`  
- 전체 배경, 카드 배경, 섹션 구분에 사용

### 30%: **서브 컬러(민트/연블루/그라데이션)**
- `bg-mint/30` 또는 연한 블루 (`bg-blue-50`, `bg-sky-50`)
- 섹션 구분, 카드 배경, 배경 패턴, 버튼 outline 등
- 예시: Hero 섹션 배경에 연한 민트/블루 그라데이션, 통계 카드에 연블루

### 10%: **포인트 컬러(Primary Blue)**
- CTA 버튼, 강조 텍스트, 아이콘, 링크
- `text-primary`, `bg-primary`, `border-primary`
- 예시: "출첵 시작하기" 버튼, 강조 텍스트, QR카드

---

## 4. 구체적 적용 예시

### Hero 섹션
- 배경: `bg-white` + `bg-dot-pattern` (연블루/민트)
- 타이틀: `text-slate-900` + `text-primary` (강조)
- 서브텍스트: `text-slate-600`
- CTA 버튼: `bg-primary text-white` (hover: `bg-primary/90`)
- 카드: `bg-white` + `border-mint/30` + 그림자

### 통계/정보 카드
- 카드 배경: `bg-slate-50` 또는 `bg-mint/30`
- 숫자: `text-primary` 또는 `font-michroma`
- 아이콘: `text-primary` 또는 `text-mint-500`

### 네비/푸터
- 배경: `bg-white` 또는 `bg-slate-50`
- 버튼: `bg-primary` (포인트), `bg-white` (서브)

---

## 5. 시각적 예시 (텍스트)

```md
- 배경: bg-white (60%)
- 섹션/카드: bg-mint/30, bg-slate-50 (30%)
- CTA/강조: bg-primary, text-primary, border-primary (10%)
```

---

## 6. 디자인 시스템 적용 예시 코드

```css
// 배경
.bg-main { @apply bg-white; }
.bg-section { @apply bg-mint/30; }
.bg-card { @apply bg-slate-50; }

// 텍스트
.text-main { @apply text-slate-900; }
.text-sub { @apply text-slate-600; }
.text-accent { @apply text-primary; }

// 버튼
.button-primary { @apply bg-primary text-white; }
.button-secondary { @apply bg-white text-primary border-primary; }
```

---

## 7. 결론 및 추가 제안

- **강렬한 블루(Primary)는 10% 이내로만 사용**  
  → CTA, 강조, 아이콘, 주요 버튼에만!
- **서브 컬러(민트/연블루)는 섹션 구분, 카드, 배경 패턴에 넉넉히 사용**
- **배경은 항상 밝고 부드럽게**  
  → 시각적 피로 최소화, 정보 집중도 향상

---

### 실제 적용 예시(랜딩 Hero)

- 배경: `bg-white` + `bg-dot-pattern` (연블루)
- 타이틀: "QR코드로" `text-slate-900` + "스마트하게" `text-primary`
- CTA 버튼: `bg-primary text-white`
- 카드: `bg-white` + `border-mint/30` + 그림자

---

이렇게 적용하면 훨씬 세련되고, 시각적 피로가 적으며, 브랜드 아이덴티티도 잘 살아납니다!  
추가로 적용 예시가 필요하면 Figma에 바로 반영해드릴 수 있습니다.  
더 구체적인 컬러값이나 섹션별 샘플이 필요하시면 말씀해 주세요!
