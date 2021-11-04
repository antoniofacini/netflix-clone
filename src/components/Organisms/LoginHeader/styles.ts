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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  height: ${(p) => p.height};
`
export const LogoContainer = styled.div<LogoContainerProps>`
  height: 90px;
  margin: ${(p) => p.imageMargin};
  display: flex;
  align-items: center;
`
