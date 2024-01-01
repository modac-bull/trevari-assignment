import React from 'react'
import { css, styled, theme } from 'twin.macro'

type LayoutPaddingType = {
  top: '0' | '60px'
  bottom: '85px'
}

type Props = {
  padding?: LayoutPaddingType
  children: React.ReactNode
}

export default function Layout({
  padding = { top: '60px', bottom: '85px' },
  children,
}: Props) {
  return <LayoutContainer padding={padding}>{children}</LayoutContainer>
}

const LayoutContainer = styled.div<{ padding: LayoutPaddingType }>`
  width: 100%;
  max-width: ${theme`variables.max-width`};
  min-height: 100vh;
  margin: 0 auto;

  ${({ padding }) =>
    padding.top &&
    css`
      padding-top: ${padding.top};
    `}

  ${({ padding }) =>
    padding.bottom &&
    css`
      padding-bottom: ${padding.bottom};
    `}
`
