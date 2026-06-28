import { useQuery } from '@tanstack/react-query';
import { getPostings } from '@/apis/posting';

// 보일러플레이트 동작 확인용 예시 페이지.
// 실제 홈 피드(3섹션)는 features/posting 또는 별도 화면으로 구현하세요.
export default function HomePage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['postings'],
    queryFn: getPostings,
  });

  if (isPending) return <div className="p-4">불러오는 중…</div>;
  if (isError) return <div className="p-4">에러가 발생했어요.</div>;

  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold text-blue-600">FitMe</h1>
      <p className="mb-4 text-sm text-gray-500">맞춤 추천 피드 (보일러플레이트 동작 확인)</p>
      <ul className="space-y-3">
        {data?.map((posting) => (
          <li key={posting.id} className="rounded-xl border border-gray-200 p-3">
            <span className="text-xs text-gray-400">
              {posting.type === 'SCHOLARSHIP' ? '장학금' : '공모전'}
            </span>
            <p className="font-semibold">{posting.title}</p>
            <p className="text-sm text-gray-500">{posting.organization}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
