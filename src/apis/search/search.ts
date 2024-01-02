import axios from 'axios'

export type BookType = {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

type KeywordType =
  | { type: 'single'; keyword: string }
  | { type: 'or'; keywords: string[] }
  | { type: 'not'; includeKeyword: string; excludeKeyword: string }

type SearchParams = {
  input: string
  page?: number
}

// 검색어 parsing 함수
const parseKeywords = (input: string): KeywordType => {
  if (input.includes('|')) {
    return { type: 'or', keywords: input.split('|').map(k => k.trim()) }
  } else if (input.includes('-')) {
    const [includeKeyword, excludeKeyword] = input.split('-').map(k => k.trim())
    return { type: 'not', includeKeyword, excludeKeyword }
  }
  return { type: 'single', keyword: input.trim() }
}

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
      return bookLists.flat()

    case 'not':
      const books = await getBooksByKeyword(parsed.includeKeyword, page)
      return filterBooksForNotOperation(books, parsed.excludeKeyword)

    case 'single':
    default:
      return getBooksByKeyword(parsed.keyword, page)
  }
}
