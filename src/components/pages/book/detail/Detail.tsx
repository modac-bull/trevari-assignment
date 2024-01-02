import { useBookDetailbyIsbnQuery } from '@/apis/books/books.query'
import Spinner from '@/components/ui/spinner/Spinner'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { styled, theme } from 'twin.macro'

export default function BookDetail() {
  const router = useRouter()
  const { bc_id } = router.query

  const { data, isLoading } = useBookDetailbyIsbnQuery({
    params: {
      isbn: String(bc_id),
    },
  })

  if (isLoading) {
    return <Spinner />
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>
  }

  const backHandler = () => {
    router.back()
  }

  return (
    <BookDetailContainer>
      <BackButton onClick={backHandler}>뒤로가기</BackButton>
      <Image
        src={data.image}
        width={200}
        height={200}
        alt={data.title}
        style={{ width: 'auto' }}
      />
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Authors>{data.authors}</Authors>
      <Publisher>{data.publisher}</Publisher>
      <Pages>{data.pages}</Pages>
      <Rating>{data.rating}</Rating>
      <Desc>{data.desc}</Desc>
      <Price>{data.price}</Price>
    </BookDetailContainer>
  )
}

const BookDetailContainer = styled.div`
  border: 1px solid ${theme`colors.gray.300`};
  padding: 15px 15px;
  border-radius: 8px;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`
const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Authors = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Publisher = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Pages = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Rating = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Desc = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
const Price = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`

const BackButton = styled.button`
  border: 1px solid ${theme`colors.gray.300`};
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 12px;
`
