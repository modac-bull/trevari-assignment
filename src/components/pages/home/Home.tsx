import React, { useEffect } from 'react'
import { styled } from 'twin.macro'
import SearchBook from './SearchBook'
import { useRouter } from 'next/router'
import { useSearchBooksInfinityQuery } from '@/apis/search/search.query'
import BookList from './BookList'
import 'twin.macro'
import { useInView } from 'react-intersection-observer'
import Spinner from '@/components/ui/spinner/Spinner'

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

  // `useInView` 훅 사용
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '0px 0px 0px 0px',
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage])

  return (
    <HomePageConatiner>
      {/* 검색어 */}
      <SearchBook />

      {isLoading ? (
        <Spinner />
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
      {isFetchingNextPage && <Spinner />}
      <div ref={ref}></div>
    </HomePageConatiner>
  )
}

const HomePageConatiner = styled.div``
