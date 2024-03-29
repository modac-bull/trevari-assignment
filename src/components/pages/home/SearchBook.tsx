import Button from '@/components/ui/buttons/Button'
import Input from '@/components/ui/forms/inputs/Input'
import Radio from '@/components/ui/forms/radio/Radio'
import ValidMsg from '@/components/ui/forms/validMsg/ValidMsg'
import { SearchBookOptions } from '@/data/constant'
import { parseKeywords } from '@/utils/parseKeywords'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { styled, theme } from 'twin.macro'

export default function SearchBook() {
  const router = useRouter()
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      keyword_1: '',
      keyword_2: '',
      search_option: 'OR',
    },
  })

  // q 파라미터로 검색어 입력 받기
  useEffect(() => {
    if (router.query.q) {
      const query = router.query.q as string
      const parsed = parseKeywords(query)

      switch (parsed.type) {
        case 'or':
          setValue('keyword_1', parsed.keywords[0])
          setValue('keyword_2', parsed.keywords[1])
          setValue('search_option', 'OR')
          break
        case 'not':
          setValue('keyword_1', parsed.includeKeyword)
          setValue('keyword_2', parsed.excludeKeyword)
          setValue('search_option', 'NOT')
          break
        case 'single':
        default:
          setValue('keyword_1', parsed.keyword)
          setValue('keyword_2', '')
          setValue('search_option', 'OR')
          break
      }
    }
  }, [router])

  const submitHandler = handleSubmit(data => {
    if (!watch('keyword_2')) {
      // 단일 검색
      router.push({
        query: {
          q: data.keyword_1,
        },
      })
      return
    }
    if (watch('search_option') === 'OR') {
      // OR 연산 검색
      router.push({
        query: {
          q: `${data.keyword_1}|${data.keyword_2}`,
        },
      })
    } else {
      // NOT 연산 검색
      router.push({
        query: {
          q: `${data.keyword_1}-${data.keyword_2}`,
        },
      })
    }
  })

  return (
    <SearchBookContainer>
      <LabelForm>
        <Label>첫번째 검색어</Label>
        <Input
          {...register('keyword_1', { required: true })}
          hasError={!!errors['keyword_1']}
        />
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

      {errors['keyword_1'] && (
        <ValidMsg text={'첫번째 검색어를 입력해주세요.'} />
      )}
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
