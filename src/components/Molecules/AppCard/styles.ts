import styled from 'styled-components'

export const AppCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 16vh;
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
    @media (max-width: 568px) {
      transform: scale(0.7);
    }
  }

  .roundedIconClass {
    min-width: 11px;
    min-height: 11px;
    max-width: 13px;
    max-height: 13px;
    color: #fff;
    font-size: 1px;
    @media (max-width: 568px) {
      transform: scale(0.7);
    }
  }
  :hover {
    transform: scale(150%);
    div {
      transition-duration: 0;
    }
    .content {
      transform: translateY(100px);
    }
  }
`

export const Content = styled.div`
  box-sizing: border-box;
  padding: 10px 5px;
  height: 100px;
  background-color: #181818;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: -100px;
  /* transition-delay: 0.3s; */
  transition-property: transform, opacity, -webkit-transform, -moz-transform,
    -o-transform;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.4s, 0.4s;
  transition-timing-function: ease, ease, ease, ease, ease;
  z-index: -1;
  @media (max-width: 568px) {
    padding: 0px 7px;
  }
`
export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 568px) {
    align-items: flex-start;
    max-height: 24px;
  }
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.7em;
  height: 2.7em;
  min-width: 22px;
  min-height: 22px;
  max-width: 28px;
  max-height: 28px;
  outline: 1px solid #fff;
  outline-offset: -3px;
  border-radius: 100%;
  @media (max-width: 568px) {
    transform: scale(0.7);
  }
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
  @media (max-width: 568px) {
    transform: scale(0.5);
  }
`

export const Relevance = styled.span`
  font-size: 14px;
  color: #46d369;
  @media (max-width: 568px) {
    font-size: 0.8em;
  }
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
  @media (max-width: 568px) {
    transform: scale(0.7);
  }
`
export const Duration = styled.span`
  font-size: 1em;
  color: #fff;
  @media (max-width: 568px) {
    font-size: 0.8em;
  }
`
export const ContentText = styled.div`
  margin-top: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Gender = styled.span`
  padding-right: 0.5vh;
  font-size: 10px;
  color: #fff;
  @media (max-width: 568px) {
    font-size: 0.8em;
  }
`
export const Genders = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
