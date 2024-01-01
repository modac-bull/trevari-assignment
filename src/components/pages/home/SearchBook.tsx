import Button from '@/components/ui/buttons/Button'
import Input from '@/components/ui/forms/inputs/Input'
import Radio from '@/components/ui/forms/radio/Radio'
import { SearchBookOptions } from '@/data/constant'
import React from 'react'
import { useForm } from 'react-hook-form'
import { styled, theme } from 'twin.macro'

export default function SearchBook() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      keyword_1: '',
      keyword_2: '',
      search_option: 'OR',
    },
  })

  const submitHandler = handleSubmit(data => {
    console.log(data)
  })

  return (
    <SearchBookContainer>
      <KeywordInput>
        <p>첫번째 검색어</p>
        <Input {...register('keyword_1')} />
      </KeywordInput>
      <KeywordInput>
        <p>두번째 검색어</p>
        <Input {...register('keyword_2')} />
      </KeywordInput>

      <ButtonContainer>
        {SearchBookOptions.map(option => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            {...register('search_option')}
          />
        ))}
        <Button onClick={submitHandler}>검색</Button>
      </ButtonContainer>
    </SearchBookContainer>
  )
}

const SearchBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${theme`colors.gray.400`};
  border-radius: 8px;
`

const KeywordInput = styled.div``

const ButtonContainer = styled.div``
