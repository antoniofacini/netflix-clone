import styled from 'styled-components'

export const AppCardContainer = styled.div`
  margin-top: 10px;
  position: relative;
  width: 100%;
  max-height: 20vh;
  border-radius: 4px;
  transition-delay: 0.3s;
  transition-property: transform, opacity, -webkit-transform, -moz-transform,
    -o-transform;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.4s, 0.4s;
  transition-timing-function: ease, ease, ease, ease, ease;
  z-index: 1;
  .iconClass {
    color: #fff;
    min-width: 26px;
    min-height: 26px;
    max-width: 32px;
    max-height: 32px;
  }

  .roundedIconClass {
    min-width: 11px;
    min-height: 11px;
    max-width: 13px;
    max-height: 13px;
    color: #fff;
    font-size: 1px;
  }
  :hover {
    transform: scale(150%);
    div {
      transition-duration: 0;
    }
    .content {
      transform: translateY(12vh);
    }
  }
`

export const Content = styled.div`
  box-sizing: border-box;
  padding: 10px 5px;
  height: 12vh;
  background-color: #181818;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: -12vh;
  /* transition-delay: 0.3s; */
  transition-property: transform, opacity, -webkit-transform, -moz-transform,
    -o-transform;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.4s, 0.4s;
  transition-timing-function: ease, ease, ease, ease, ease;
  z-index: -1;
`
export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 22px;
  min-height: 22px;
  max-width: 28px;
  max-height: 28px;
  outline: 1px solid #fff;
  outline-offset: -3px;
  border-radius: 50%;
`
export const ExpandMore = styled.div`
  border-radius: 100%;
  min-width: 26px;
  min-height: 26px;
  max-width: 26px;
  max-height: 26px;
  display: flex;
  justify-content: center;
  border: 1px solid #e5e5e5;
`

export const Relevance = styled.span`
  font-size: 14px;
  color: #46d369;
`
export const Age = styled.span`
  width: 26px;
  text-align: center;
  height: 18px;
  padding: 2px;
  box-sizing: border-box;
  background-color: red;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
`
export const Duration = styled.span`
  font-size: 14px;
  color: #fff;
`
export const ContentText = styled.div`
  margin-top: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Gender = styled.span`
  padding-right: 0.5vh;
  font-size: 12px;
  color: #fff;
`
export const Genders = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
