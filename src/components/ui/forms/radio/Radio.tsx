import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import { css, styled, theme } from 'twin.macro'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  label?: string
}

const Radio = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, label, ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <RadioConatiner>
        <RadioElement type="radio" ref={ref} disabled={disabled} {...props} />
        {label && <span>{label}</span>}
      </RadioConatiner>
    )
  },
)

export default Radio

const RadioConatiner = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`

const RadioElement = styled.input<InputProps>`
  ~ span {
    margin: 0 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  &:disabled ~ span {
    background-color: ${theme`colors.gray`};
  }
  /* disabled 스타일 */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme`colors.gray`};
      border-color: ${theme`colors.gray`};
    `}
`
