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
  transition-duration: 0.5s;
  padding: 0 4%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${(p) => p.height};
  display: flex;
  align-items: center;
  z-index: 5;
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
  padding-left: 10px;
  width: fit-content;
  justify-content: space-between;

  @media (max-width: 880px) {
    display: none;
  }
`

export const MenuLinkTrigger = styled.a`
  font-size: 1.2rem;
  color: #fff;
  margin-left: 18px;
  position: relative;
  :after {
    position: absolute;
    bottom: 4px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
    margin-left: 5px;
  }
  @media (min-width: 880px) {
    display: none;
  }
`

export const MenuLink = styled.div`
  height: 300px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  top: 71px;
  left: 40px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 13px;
  line-height: 21px;
  border: solid 1px rgba(255, 255, 255, 0.15);
  cursor: default;
`
export const Arrow = styled.div`
  position: absolute;
  top: -16px;
  left: 50%;
  border-width: 7px;
  margin-left: -7px;
  border-color: transparent transparent #e5e5e5;
  border-style: solid;
  height: 0;
  width: 0;
`
export const TopBar = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e5e5e5;
`
export const MenusContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`
export const UserMenuTrigger = styled.a`
  font-size: min(1.5rem, 16px);
  color: #fff;
  position: relative;
  display: flex;
  width: 90px;
  align-items: center;
  justify-content: space-between;
`
export const MenuUser = styled.div`
  height: 100px;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  top: 71px;
  right: 40px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 13px;
  line-height: 21px;
  border: solid 1px rgba(255, 255, 255, 0.15);
  cursor: default;
`

export const UserArrow = styled.div`
  position: absolute;
  top: -16px;
  right: 20%;
  border-width: 7px;
  margin-left: -7px;
  border-color: transparent transparent #e5e5e5;
  border-style: solid;
  height: 0;
  width: 0;
`
export const SearchInput = styled.input`
  background: #141414;
  float: right;
  font-size: 16px;
  margin: 0 15px 0 0;
  padding: 8px 0.5em;
  width: 10em;
  border: 1px solid #ccc;
  color: #ccc;
`

export const Link = styled.a`
  text-align: center;
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
  @media (max-width: 880px) {
    display: flex;
    width: 260px;
    margin: 0;
    align-items: center;
    justify-content: center;
    height: 50px;
    :hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`
export const UserMenuLink = styled.a`
  text-align: center;
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
