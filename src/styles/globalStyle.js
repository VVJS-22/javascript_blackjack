import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        line-height: 1.5;
        color: #fff
    }

    html,body,#root {
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }
`