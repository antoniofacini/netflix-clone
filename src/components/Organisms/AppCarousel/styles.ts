import styled from 'styled-components'

export const CssContext = styled.div`
  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: flex-end;
  }

  .dot {
    border: none;
    width: 10px;
    height: 5px;
    background: #c5c5c5;
    margin: 0 5px;
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
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`

export const Div = styled.div`
  overflow: visible !important;
  width: 80vw;

  :hover {
    position: relative;
  }
`
export const Slide = styled.div`
  width: 20%;
`
