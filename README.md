# 🧑‍🎄 FitMe Frontend

> **대학생 맞춤형 장학금 · 공모전 매칭 서비스 — FitMe 프론트엔드 레포지토리입니다.**

## 🛠 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

## 📂 폴더 구조

```text
src/
 ├ apis/        # Axios 인스턴스 설정 및 공통 API 요청 함수
 ├ constants/   # Mock 데이터 및 전역 상수 관리
 ├ features/    # 핵심 비즈니스 기능(도메인)별 폴더
 │  ├ auth/      # 로그인, 회원가입, 온보딩 로직 및 컴포넌트
 │  ├ posting/   # 공고 피드, 공고 상세, 탐색(검색)
 │  ├ saved/     # 찜한 공고 목록 (보관함)
 │  ├ history/   # 지원 및 매칭 히스토리
 │  └ mypage/    # 내 정보 설정 및 프로필
 ├ shared/      # 여러 기능에서 공동으로 재사용하는 요소
 │  ├ components/# Button, Modal, Chip, PostingCard 등 공통 UI 컴포넌트
 │  ├ hooks/     # useDebounce, useInfiniteScroll 등 커스텀 훅
 │  └ utils/     # 날짜 포맷팅, D-Day 계산 등 유틸리티 함수
 ├ pages/       # 라우터에 바인딩되는 개별 화면 컴포넌트
 ├ routes/      # react-router-dom을 이용한 페이지 경로 및 권한 설정
 ├ store/       # Zustand를 활용한 전역 클라이언트 상태 (Auth 등)
 ├ types/       # 공통 TypeScript 타입 정의 (.d.ts 등)
 ├ lib/         # React Query Client 등 라이브러리 설정 파일
 └ package.json # 프로젝트 의존성 및 스크립트 설정
```

## 🌿 브랜치 및 협업 전략

### 브랜치 전략

- **`main`**: 프로덕션 배포를 위한 브랜치.
- **`develop`**: 개발 중인 코드가 통합되는 중심 브랜치. PR을 통해서만 병합 가능.
- **`feature/기능명`**: 기능 개발을 진행하는 개별 작업 브랜치. (`develop`에서 분기)
  - _e.g: `feature/login`, `feature/posting-list`_

### 커밋 메시지 규칙

커밋 메시지는 `타입: 메시지 내용` 형식을 준수

| 타입       | 설명                             |
| :--------- | :------------------------------- |
| `feature`  | 새로운 기능 추가                 |
| `fix`      | 버그 수정                        |
| `docs`     | 문서 수정                        |
| `style`    | 코드 포맷팅, 세미콜론 누락 등    |
| `refactor` | 프로덕션 코드 리팩토링           |
| `test`     | 테스트 코드 추가 및 수정         |
| `chore`    | 빌드 업무, 패키지 매니저 설정 등 |

### Pull Request (PR) 및 코드 리뷰 컨벤션

- `feature/기능명` 브랜치에서 작업 완료 후 `develop` 브랜치로 PR을 보냄.
- 최소 **1명 이상의 팀원 승인**을 받아야만 `develop` 브랜치에 병합할 수 있음.
- 패키지가 추가/변경되었을 경우 PR 내용에 명시하고 팀원에게 공지할 것.

## 🚀 실행 방법

```bash
# 1. 의존성 패키지 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev

# 3. 코드 스타일 및 린트 검사
pnpm lint   # ESLint 검사
pnpm format # Prettier 포맷팅 자동 적용
```

## 📱 화면 목록 및 서비스 플로우

### 화면 목록

- **인증 및 온보딩**
  - `로그인 / 회원가입`: 이메일 기반 간편 가입
  - `온보딩`: 관심 키워드(장학금 분야, 공모전 분야 등) 선택
- **메인 서비스**
  - `홈 피드`: 맞춤 추천 공고(인기 공고, 마감 임박 공고 등 3가지 섹션)
  - `탐색 (검색)`: 키워드 검색 및 카테고리/주최기관 필터링
  - `공고 상세`: 상세 공고 포스터, 상세 정보 요약 및 원본 링크 제공
- **개인화 메뉴**
  - `찜 보관함`: 사용자가 관심 등록한 공고 목록
  - `마이페이지`: 온보딩 선택 정보 수정 및 설정
  - `이력`: 사용자가 지원한 공고 관리

### 페이지 이동 흐름 (Flow)

```mermaid
graph TD
    A[시작] --> B{로그인 여부}
    B -- 미인증 --> C[로그인 / 회원가입]
    B -- 인증됨 --> D{온보딩 여부}
    C --> D
    D -- 미완료 --> E[온보딩 단계]
    E --> F[홈 피드]
    D -- 완료됨 --> F

    F --> G[탐색 / 검색]
    F --> H[공고 상세]
    F --> I[찜 보관함]
    F --> J[마이페이지]
    F --> K[이력]

    G --> H
    I --> H
    K --> H
```

## 👥 팀원 및 역할 분담

| 이름                              | 역할            | 담당 기능 (R&R)          |
| :-------------------------------- | :-------------- | :----------------------- |
| **[서은호](https://github.com/)** | 프론트엔드 개발 | [담당 역할 및 기능 상세] |
| **[김경섭](https://github.com/)** | 프론트엔드 개발 | [담당 역할 및 기능 상세] |
| **[정종욱](https://github.com/)** | 프론트엔드 개발 | [담당 역할 및 기능 상세] |
