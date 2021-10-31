import { Button } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

export interface Props {
  background: string
}

export const StyledButton = styled(Button)`
  width: min(100%, 500px);
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff !important;
  background-color: ${(p: Props) => p.background};
  :hover {
    background-color: ${(p: Props) => p.background};
  }
`
