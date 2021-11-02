import styled from 'styled-components'

export const Div = styled.div`
  max-width: 200px;
  max-height: 200px;
  height: 10vw;
  width: 10vw;
  text-align: center;
  position: relative;
  margin: 0 2vw 0 0;
  .hover-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    max-width: 200px;
    max-height: 200px;
    height: 10vw;
    width: 10vw;
  }
  :hover {
    .hover-border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      border: 3px solid #e5e5e5;
    }

    p {
      color: #e5e5e5;
    }
  }
`

export const Texto = styled.p`
  margin-top: 10px;
  color: #808080;
  font-size: 1.3vw;
`
