import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }

    h1 {
        color: #fff;
    }
`