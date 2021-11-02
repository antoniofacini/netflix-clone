import styled from 'styled-components'

export const AppCardContainer = styled.div`
  margin-top: 10px;
  position: relative;
  width: 100%;
  border-radius: 4px;
  transition-property: transform, opacity, -webkit-transform, -moz-transform,
    -o-transform;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.4s, 0.4s;
  transition-timing-function: ease, ease, ease, ease, ease;
  z-index: 1;

  :hover {
    transform: scale(150%);
    div {
      transform: translateY(12vh);
    }
  }
`
export const Image = styled.section`
  width: 100%;
  background-color: #ff0000;
  height: 20vh;
`
export const Content = styled.div`
  height: 12vh;
  background-color: #181818;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: -12vh;
  transition-property: transform, opacity, -webkit-transform, -moz-transform,
    -o-transform;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.4s, 0.4s;
  transition-timing-function: ease, ease, ease, ease, ease;
  z-index: -1;
`
