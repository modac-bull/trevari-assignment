import { BookType } from '@/apis/search/search.type'
import { styled, theme } from 'twin.macro'

type Props = {
  data: BookType
}

export default function BookItem({ data }: Props) {
  const title = data.title
  const subtitle = data.subtitle
  const image = data.image
  const url = data.url
  return (
    <BookItemContainer>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{image}</div>
      <div>{url}</div>
    </BookItemContainer>
  )
}

const BookItemContainer = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
`
