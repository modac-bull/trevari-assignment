import { BookType } from '@/apis/search/search.type'
import Link from 'next/link'
import { styled, theme } from 'twin.macro'
import Image from 'next/image'

type Props = {
  data: BookType
}

export default function BookItem({ data }: Props) {
  const title = data.title
  const subtitle = data.subtitle
  const url = data.url
  return (
    <BookItemContainer>
      <Link href={`/book/${data.isbn13}`}>
        <Image
          src={data.image}
          width={50}
          height={50}
          alt={data.title}
          style={{ width: 'auto' }}
        />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <UrlText>{url}</UrlText>
      </Link>
    </BookItemContainer>
  )
}

const BookItemContainer = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid ${theme`colors.gray.300`};
  margin-bottom: 10px;
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
const UrlText = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`
