import { createGlobalStyle } from "styled-components"

export const darkBlueTheme = {
    body: '#15202b',
}

export const darkTheme = {
    body: 'black'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 2s linear;
  }
`