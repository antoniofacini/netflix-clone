import styled from 'styled-components'

export const CssContext = styled.div`
  margin: 3vw 0;
  .navigation-wrapper {
    position: relative;
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
    width: 40px;
    height: 80%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;

    :hover {
      /* background-color: rgba(0, 0, 0, 0.5); */
      background-image: radial-gradient(
        rgba(0, 0, 0, 0.5) 15%,
        rgba(0, 0, 0, 0.1) 100%,
        rgba(0, 0, 0, 0.2) 5%
      );
    }
  }

  .arrow--left {
    left: 0px;
  }

  .arrow--right {
    left: auto;
    right: 0px;
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
  display: table-cell;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4vw;
  color: #e5e5e5;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`
