import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}
html,body,#__next{
  height: 100%;
}

body{
  font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
}
`

export default GlobalStyle
