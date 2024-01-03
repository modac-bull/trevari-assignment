
import { useQuery } from '@tanstack/react-query'
import { BookDetailQueryType } from './books.type'
import { getBookDetailbyIsbn } from './books'

// 책 상세 API 쿼리
export const useBookDetailbyIsbnQuery = ({
  params,
  useQueryOptions,
}: BookDetailQueryType) => {
  return useQuery({
    queryKey: ['book-detail', params.isbn],
    queryFn: () => getBookDetailbyIsbn(params.isbn),
    ...useQueryOptions,
  })
}
