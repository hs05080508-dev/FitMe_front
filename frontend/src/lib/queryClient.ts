import { QueryClient } from '@tanstack/react-query';

// 서버 상태 캐시 정책 (워크북 6주차: staleTime <= gcTime)
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1분 동안 fresh
      gcTime: 1000 * 60 * 5, // 5분 후 미사용 캐시 정리
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: { retry: false },
  },
});
