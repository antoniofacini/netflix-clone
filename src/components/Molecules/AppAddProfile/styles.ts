import styled from 'styled-components'

export const Div = styled.div`
  max-width: 200px;
  max-height: 200px;
  height: 10vw;
  width: 10vw;
  text-align: center;
  position: relative;
  margin: 0 2vw 0 0;

  :hover {
    div {
      background-color: #e5e5e5;
    }
    p {
      color: #e5e5e5;
    }
  }
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  max-height: 200px;
  height: 10vw;
  width: 10vw;
`
export const Texto = styled.p`
  margin-top: 10px;
  color: #808080;
  font-size: 1.3vw;
`
