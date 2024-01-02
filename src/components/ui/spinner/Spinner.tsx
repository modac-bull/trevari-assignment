import { styled, theme } from 'twin.macro'

interface Props {
  className?: string
}

export default function Spinner({ className }: Props) {
  return (
    <SpinnerContainer className={className}>
      <SpinnerElement />
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpinnerElement = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  border: 3px solid ${theme`colors.primary`};
  border-top-color: ${theme`colors.secondary`};

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
