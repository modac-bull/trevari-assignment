import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type BookDetailType = {
  error: string
  title: string
  subtitle: string
  authors: string
  publisher: string
  language: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc: string
  price: string
  image: string
  url: string
}

// 쿼리 타입
export interface BookDetailParamsType {
  isbn: string
}

export interface BookDetailQueryType {
  params: BookDetailParamsType
  useQueryOptions?: UseQueryOptions<BookDetailType, AxiosError>
}
