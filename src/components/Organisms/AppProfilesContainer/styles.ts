import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  font-weight: unset;
  text-align: center;
  margin: 0.67em 0;
`
export const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 1em 0;
`
export const Button = styled.div`
  width: fit-content;
  text-align: center;
  margin: 4em 0 1em 0;
  border: 1px solid #808080;
  padding: 0.5em 1.5em;
  line-height: 1.2;
  letter-spacing: 2px;
  font-size: 1.2vw;
  color: #808080;
  :hover {
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
  }
`
