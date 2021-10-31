import styled from 'styled-components'

export const Div = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  background-color: #000000;
  opacity: 0.5;
`
export const Surface = styled.div`
  z-index: 5;
`
export const Section = styled.section`
  min-height: 100vh;
  margin: 0 auto -236px;
  max-width: 450px;
  z-index: 5;
  ::after {
    content: '';
    height: 236px;
    display: block;
  }
  ::before {
    content: '';
    height: 91px;
    display: block;
  }
`

export const Background = styled.div`
  background-size: cover;
  display: block;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
`
