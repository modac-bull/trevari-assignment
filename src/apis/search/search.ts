import { parseKeywords } from '@/utils/parseKeywords'
import axios from 'axios'
import { BookType } from './search.type'

// 도서 키워즈 조회 API
const getBooksByKeyword = async (
  keyword: string,
  page: number,
): Promise<BookType[]> => {
  const response = await axios.get(
    `https://api.itbook.store/1.0/search/${keyword}/${page}`,
  )
  return response.data.books
}

// not 오퍼레이터 필터 함수
const filterBooksForNotOperation = (
  books: BookType[],
  excludeKeyword: string,
): BookType[] => {
  return books.filter(
    book =>
      !book.title.includes(excludeKeyword) &&
      !book.subtitle.includes(excludeKeyword),
  )
}

// 도서 목록, 검색 조회 API
export const getSearchResult = async (input = '', page = 1) => {
  const parsed = parseKeywords(input)

  switch (parsed.type) {
    case 'or':
      const bookLists = await Promise.all(
        parsed.keywords.map(keyword => getBooksByKeyword(keyword, page)),
      )
      const combinedBooks = bookLists.flat()
      return {
        books: combinedBooks,
        page,
        total: combinedBooks.length,
        totalPages: page,
      }

    case 'not':
      const books = await getBooksByKeyword(parsed.includeKeyword, page)
      const filteredBooks = filterBooksForNotOperation(
        books,
        parsed.excludeKeyword,
      )
      return {
        books: filteredBooks,
        page,
        total: filteredBooks.length,
        totalPages: page,
      }

    case 'single':
    default:
      const response = await axios.get(
        `https://api.itbook.store/1.0/search/${parsed.keyword}/${page}`,
      )
      return {
        books: response.data.books,
        page: response.data.page,
        total: response.data.total,
        totalPages: response.data.totalPages,
      }
  }
}
