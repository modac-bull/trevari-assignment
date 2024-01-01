import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import { css, styled, theme } from 'twin.macro'

type SizeHeightType = 'md' | 'lg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styleHeightSize?: SizeHeightType
  styleWidthSize?: string
  unit?: string
  hasError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = 'text', disabled, readOnly, hasError, ...props },
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <InputContainer
        hasError={hasError}
        disabled={disabled}
        readOnly={readOnly}
      >
        <InputElement
          type={type}
          ref={ref}
          hasError={hasError}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />
      </InputContainer>
    )
  },
)

export default Input

const InputContainer = styled.label<InputProps>`
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  min-height: 20px;
  padding: 9px 10px;
  border: 1px solid ${theme`colors.gray.400`};

  /* errors 스타일 */
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme`colors.red.400`};
      &:focus {
        border-color: ${theme`colors.primary`};
      }
    `}

  /* readOnly 스타일 */
  ${({ readOnly }) =>
    readOnly &&
    css`
      border-color: ${theme`colors.gray.400`};
    `}

  /* disabled 스타일 */
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${theme`colors.gray.400`};
    `}

    
  /* styleWidthSize에 따른 스타일 */
  ${({ styleWidthSize }) => css`
    width: ${styleWidthSize};
  `}

  /* styleHeightSize에 따른 스타일 */
  ${({ styleHeightSize }) =>
    styleHeightSize === 'md' &&
    css`
      height: 36px;
    `}

  ${({ styleHeightSize }) =>
    styleHeightSize === 'lg' &&
    css`
      padding: 13px 10px;
      height: 48px;
    `}
`

const InputElement = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  outline: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 24px;
  letter-spacing: -0.56px;
  &::placeholder {
    color: ${theme`colors.gray`};
  }
  &:focus {
    border-color: ${theme`colors.primary`};
  }

  /* readOnly 스타일 */
  ${({ readOnly }) =>
    readOnly &&
    css`
      background-color: ${theme`colors.gray.500`};
    `}

  /* disabled 스타일 */
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${theme`colors.gray`};
    `}
`
