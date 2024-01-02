import { useInfiniteQuery } from '@tanstack/react-query'
import { getSearchResult } from './search'
import { BookListInfinityQueryType } from './search.type'

/**
 * 캠페인 리스트 인피니티 스크롤 쿼리
 */
export const useSearchBooksInfinityQuery = ({
  params,
}: BookListInfinityQueryType) => {
  return useInfiniteQuery({
    queryKey: ['book', params],
    queryFn: ({ pageParam = 0 }) => getSearchResult(params?.input, pageParam),
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1
      } else {
        return undefined
      }
    },
    initialPageParam: 1, // 초기 페이지 설정
  })
}
