# FitMe Frontend

대학생 맞춤형 장학금·공모전 추천 서비스 (모바일 우선 반응형 웹)

## 기술 스택
- React 19 + TypeScript + Vite
- 서버 상태: TanStack Query / 클라이언트 상태: Zustand
- 스타일: Tailwind CSS v4
- 폼: react-hook-form + Zod
- HTTP: axios (토큰 인터셉터 포함)
- 라우팅: react-router-dom

## 시작하기
```bash
pnpm install      # 라이브러리 설치
pnpm dev          # 개발 서버 (http://localhost:5173)
pnpm lint         # ESLint 검사
pnpm format       # Prettier 포맷
```
> Node 20, pnpm 사용. (.nvmrc 참고)
> 환경변수는 `.env.example` 복사해서 `.env` 만들기 (커밋 금지)

## 폴더 구조 (feature 기반)
```
src/
 ├ apis/        axios 인스턴스 + API 함수
 ├ constants/   mock 데이터 등 고정값
 ├ features/    기능별 (auth, posting, saved, history, mypage)
 ├ shared/      공통 컴포넌트·훅·유틸
 ├ pages/       라우트 연결 화면
 ├ routes/      라우터 설정
 ├ store/       Zustand 전역 상태
 ├ types/       공통 타입
 └ lib/         queryClient 등
```

## 협업 규칙
- 브랜치: main(배포) / develop(통합) / feature/기능명
- develop 직접 push 금지 → **PR로만** 머지, 리뷰 1명 승인
- 커밋: `feat / fix / chore / style / refactor`
- 패키지 추가 후엔 팀에 `pnpm install` 공지

## Mock → API 교체
지금은 `constants/mockData.ts` + `apis/posting.ts` 의 mock 으로 UI 개발.
백엔드 Swagger 나오면 `types/` 타입 맞추고 `apis/` 함수 **내부만** axios 로 교체하면 됩니다.
