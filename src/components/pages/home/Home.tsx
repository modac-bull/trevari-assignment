import React, { use, useEffect } from 'react'
import { styled } from 'twin.macro'
import SearchBook from './SearchBook'
import { getSearchResult } from '@/apis/search/search'
import { useRouter } from 'next/router'

type Props = {}

export default function HomePage({}: Props) {
  const router = useRouter()
  const { q } = router.query
  // 쿼리 파라미터
  console.log('router', router.query)
  useEffect(() => {
    console.log('HomePage')
    const fetchData = async () => {
      const res = await getSearchResult(q as string)
      console.log('res', res)
    }
    fetchData()
  }, [router])

  return (
    <HomePageConatiner>
      {/* 검색어 */}
      <SearchBook />

      {/* TODO - 목록 */}
      <div>목록 이곳에</div>
    </HomePageConatiner>
  )
}

const HomePageConatiner = styled.div``
