import { TextField } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

export const StyledTextField = styled(TextField)`
  width: 100%;
  height: 50px;
  color: #ffffff !important;
  background-color: #333333;
  border-radius: 5px;

  .MuiFilledInput-root {
    color: #ffffff !important;
  }
  .MuiFilledInput-root:before {
    border: none;
  }
  .MuiFilledInput-root:hover:before {
    border: none;
    content: none;
  }
  .MuiInputLabel-root {
    color: #8c8c8c !important;
    font-size: 18px;
  }
  .MuiFilledInput-root:after {
    border-bottom: none;
  }
`
