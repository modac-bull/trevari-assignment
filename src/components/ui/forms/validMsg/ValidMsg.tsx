import React from 'react'
import { styled, theme } from 'twin.macro'

type Props = {
  text: string
}

export default function ValidMsg({ text }: Props) {
  return <ValidMsgElement>{text}</ValidMsgElement>
}

const ValidMsgElement = styled.p`
  font-size: 12px;
  color: ${theme`colors.red.500`};
`
