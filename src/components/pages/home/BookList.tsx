import React from 'react'
import { styled, theme } from 'twin.macro'
import BookItem from './BookItem'
import { BookType } from '@/apis/search/search.type'

type Props = {
  listData: BookType[]
}

export default function BookList({ listData }: Props) {
  return (
    <BookListContainer>
      {listData.length > 0 &&
        listData.map((book, i) => <BookItem key={i} data={book} />)}
    </BookListContainer>
  )
}

const BookListContainer = styled.div`
  padding: 10px 10px;
`
