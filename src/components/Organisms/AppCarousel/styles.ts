import styled from 'styled-components'

export const CssContext = styled.div`
  margin: 3vw 0;
  .navigation-wrapper {
    position: relative;
    height: fit-content;
  }

  .dots {
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
  }

  .dot {
    border: none;
    width: 10px;
    height: 2px;
    background: #c5c5c5;
    margin: 0 1px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }
  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
  }

  .arrow--left {
    left: 0px;
  }

  .arrow--right {
    left: auto;
    right: 0px;
  }
  @media (max-width: 767px) {
    margin: 2vh 0;
  }
`

export const Div = styled.div`
  overflow: visible !important;

  width: 100%;
  :hover {
    position: relative;
  }
`
export const Slide = styled.div`
  width: 20%;

  overflow: visible !important;
  :hover {
    z-index: 1;
  }
`
export const Title = styled.h2`
  margin-bottom: 10px;
  display: table-cell;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4em;
  color: #e5e5e5;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`
