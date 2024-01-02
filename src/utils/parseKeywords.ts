type KeywordType =
  | { type: 'single'; keyword: string }
  | { type: 'or'; keywords: string[] }
  | { type: 'not'; includeKeyword: string; excludeKeyword: string }

// 검색어 parsing 함수
export const parseKeywords = (input: string): KeywordType => {
  if (input.includes('|')) {
    return { type: 'or', keywords: input.split('|').map(k => k.trim()) }
  } else if (input.includes('-')) {
    const [includeKeyword, excludeKeyword] = input.split('-').map(k => k.trim())
    return { type: 'not', includeKeyword, excludeKeyword }
  }
  return { type: 'single', keyword: input.trim() }
}
