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
      <LabelForm>
        <Label>첫번째 검색어</Label>
        <Input {...register('keyword_1')} />
      </LabelForm>
      <LabelForm>
        <Label>두번째 검색어</Label>
        <Input {...register('keyword_2')} />
      </LabelForm>

      <LabelForm>
        <Label>검색 조건</Label>
        {SearchBookOptions.map(option => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            {...register('search_option')}
          />
        ))}
      </LabelForm>

      <ButtonContainer>
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

const LabelForm = styled.div``

const ButtonContainer = styled.div``

const Label = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  color: ${theme`colors.gray.800`};
`
