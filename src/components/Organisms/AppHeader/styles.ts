import styled from 'styled-components'

export interface HeaderProps {
  background: string
  height: string
}
export interface LogoContainerProps {
  imageMargin: string
}

export const Header = styled.header<HeaderProps>`
  background: ${(p) => p.background};
  padding: 0 4%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${(p) => p.height};
  display: flex;
  align-items: center;
  z-index: 99;
`
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LogoContainer = styled.div<LogoContainerProps>`
  height: 90px;
  /* margin: ${(p) => p.imageMargin}; */
  display: flex;
  align-items: center;
`
export const LinksContainer = styled.div`
  display: flex;
  padding: 0 30px;
  width: fit-content;
  justify-content: space-between;
`
export const MenusContainer = styled.div`
  color: #fff;
`
export const Link = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 10px;
  cursor: pointer;
  :nth-child(1) {
    font-weight: 700;
  }
  :hover {
    color: #c8c8c8;
  }
`
