import Input from '@/components/ui/forms/inputs/Input'
import React from 'react'
import { styled } from 'twin.macro'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <HomePageConatiner>
      {/* TODO - 검색어 입력 */}
      <Input />
      {/* TODO - 목록 */}
    </HomePageConatiner>
  )
}

const HomePageConatiner = styled.div`
`
