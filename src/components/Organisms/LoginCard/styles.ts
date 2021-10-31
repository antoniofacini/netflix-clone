import styled from 'styled-components'

export const Div = styled.div`
  min-height: 660px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
export const Main = styled.main`
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-height: 360px;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
  z-index: 5;
`

export const ButtonContainer = styled.div`
  z-index: 0;
  margin: 24px 0 12px;
`
export const FormHelper = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  color: white;
  height: 30px;
`

export const Checkbox = styled.input`
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
`
export const CheckboxText = styled.span`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
  display: block;
  line-height: 1.2;
  z-index: 5;
`
export const Facebook = styled.span`
  color: #737373;
  font-size: 13px;
  font-weight: 500;
`
export const Help = styled.a`
  cursor: pointer;
  color: #b3b3b3;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 1;
  -moz-box-flex: 0;
  -ms-flex: 0 0 1;
  flex: 0 0 1;
  font-size: 13px;
  font-weight: 500;
  padding-top: 5px;
  z-index: 5;
  :hover {
    text-decoration: underline;
  }
`
export const NewUser = styled.span`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0;
  z-index: 5;
`

export const NewUserLink = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  z-index: 5;
`
export const Captcha = styled.span`
  text-align: left;
  font-size: 13px;
  color: #8c8c8c;
  z-index: 5;
`
export const CaptchaButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`
