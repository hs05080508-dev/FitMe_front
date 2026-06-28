import type { Posting } from '@/types/posting';
import { MOCK_POSTINGS } from '@/constants/mockData';
// import { axiosInstance } from '@/apis/axiosInstance';

// === 지금은 mock 반환 (UI 먼저 개발) ===
export const getPostings = async (): Promise<Posting[]> => {
  await new Promise((r) => setTimeout(r, 300)); // 네트워크 흉내
  return MOCK_POSTINGS;
};

// === 백엔드 Swagger 나오면 이 함수 "내부만" 교체하면 끝 ===
// export const getPostings = async (): Promise<Posting[]> => {
//   const { data } = await axiosInstance.get<Posting[]>('/postings');
//   return data;
// };
