import styled from 'styled-components'
import { NativeSelect, MenuItem } from '@material-ui/core'
// import { styled as styles } from '@material-ui/core/styles'

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.75);
  min-width: 190px;
  width: 100%;
  margin-top: 80px;
  padding-bottom: 20px;
  font-size: 1em;
  color: #757575;
  position: relative;

  .MuiInput-root:after {
    border-bottom: none;
  }
`
export const FooterTop = styled.p`
  color: #757575;
  font-size: 16px;
  margin: 0 0 30px;
`
export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
`
export const A = styled.a`
  text-decoration: none;
  color: #757575;
  font-size: 16px;
`
export const ASmall = styled.a`
  text-decoration: none;
  color: #757575;
  font-size: 13px;
`
export const Span = styled.span`
  color: #757575;
  font-size: 16px;
`
export const Ul = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding: 0;
  margin: 0;
`

export const Li = styled.li`
  list-style: none;
  text-align: -webkit-match-parent;
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  vertical-align: top;
`
export const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  background-color: #000 !important;
`
export const MUISelect = styled(NativeSelect)`
  .MuiNativeSelect-outlined {
    color: #ff0000;
    font-size: 16px;
    padding: 6px 13px 6px 25px;
    background-color: #000;
    width: 138px;
    height: 48px;
    border: 1px solid #333 !important;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .MuiNativeSelect-iconOutlined {
    color: #757575;
  }
`
export const MUIMenuItem = styled(MenuItem)`
  color: rgba(0, 0, 0, 0.87);
`
