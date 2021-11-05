import styled from 'styled-components'

export const VideoWrapper = styled.div`
  position: relative;
  margin-top: min(30px, 5vh);
  /* height: 100%;
  width: 100%; */
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;
  position: absolute;
  right: 3%;
  top: 70%;
  color: #fff;
`
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 25%;
`
export const IntroText = styled.span`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  max-width: 300px;
`
