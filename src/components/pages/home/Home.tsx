import React from 'react'
import { styled } from 'twin.macro'
import SearchBook from './SearchBook'

type Props = {}

export default function HomePage({}: Props) {
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
