import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        outline: none;
    }
    body{
        background-color: #eee;
    }

    button{
        cursor: pointer;
        display: block;
    }

`