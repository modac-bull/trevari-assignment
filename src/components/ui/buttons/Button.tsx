import Link from 'next/link'
import React, { ButtonHTMLAttributes } from 'react'
import { styled, theme } from 'twin.macro'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({
  type = 'button',
  disabled,
  children,
  href,
  onClick,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonElement
          type={type}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {children}
        </ButtonElement>
      </Link>
    )
  }
  return (
    <ButtonElement type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </ButtonElement>
  )
}

const ButtonElement = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  border: none;
  border-radius: 16px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  padding: 16px 0;
  background-color: ${theme`colors.primary`};
  &:disabled {
    color: ${theme`colors.white`};
    background-color: ${theme`colors.gray.400`};
    pointer-events: none;
  }

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.8px;

  color: ${theme`colors.white`};
`
