// 도서 상세 API

import axios from 'axios'
import { BookDetailType } from './books.type'

export const getBookDetailbyIsbn = async (isbn: string): Promise<BookDetailType> => {
  const response = await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
  return response.data
}
