import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type BookResType = {
  error: string
  total: string
  page: string
  books: BookType[]
}

export type BookType = {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

// Infinity 쿼리 타입
export interface BookListInfinityQueryType {
  params?: BookistInfitiyParams
  useQueryOptions?: UseQueryOptions<BookResType, AxiosError>
}

export interface BookistInfitiyParams {
  input: string
}
