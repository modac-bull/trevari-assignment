// 쿼리

import { useQuery } from '@tanstack/react-query'
import { BookDetailQueryType, BookDetailType } from './books.type'
import { AxiosError } from 'axios'
import { getBookDetailbyIsbn } from './books'

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
