import type { Posting } from '@/types/posting';

// UI 개발용 가짜 데이터. 백엔드 API 나오면 apis/posting.ts 에서 교체.
export const MOCK_POSTINGS: Posting[] = [
  {
    id: 1,
    type: 'SCHOLARSHIP',
    title: '2026년 2학기 국가장학금 II유형 신청 안내',
    organization: '한국장학재단',
    deadline: '2026-07-10',
    posterUrl: 'https://placehold.co/300x400?text=KOSAF',
    isSaved: false,
  },
  {
    id: 2,
    type: 'CONTEST',
    title: '2026 대학생 마케팅 아이디어 공모전',
    organization: 'CJ ENM',
    deadline: '2026-07-21',
    posterUrl: 'https://placehold.co/300x400?text=Contest',
    isSaved: true,
  },
  {
    id: 3,
    type: 'SCHOLARSHIP',
    title: '교내 성적우수 장학금 신청',
    organization: '동국대학교',
    deadline: '2026-07-28',
    posterUrl: 'https://placehold.co/300x400?text=Univ',
    isSaved: false,
  },
];
