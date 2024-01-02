import React from 'react'
import { styled } from 'twin.macro'
import SearchBook from './SearchBook'
import { useRouter } from 'next/router'
import { useSearchBooksInfinityQuery } from '@/apis/search/search.query'
import BookList from './BookList'
import 'twin.macro'

type Props = {}

export default function HomePage({}: Props) {
  const router = useRouter()
  const { q } = router.query
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useSearchBooksInfinityQuery({
      params: {
        input: q as string,
      },
    })

  console.log('data : ', data)

  return (
    <HomePageConatiner>
      {/* 검색어 */}
      <SearchBook />

      {isLoading ? (
        <span>로딩중</span>
      ) : data ? (
        data.pages.map((group, i) => {
          return group.books.length > 0 ? (
            <div key={i}>
              <BookList listData={group.books} />
            </div>
          ) : (
            <div tw="w-full h-[500px] flex items-center justify-center">
              <p>필터 검색 결과가 없습니다.</p>
            </div>
          )
        })
      ) : (
        <p>데이터 없음</p>
      )}
      {isFetchingNextPage && <span>로딩중</span>}
      {/* <div ref={ref}></div> */}

      {}
    </HomePageConatiner>
  )
}

const HomePageConatiner = styled.div``
