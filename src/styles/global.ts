import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #fff;

        --blue-500: #0112fe;

        --gray-300: #B0AFAF;
        --gray-800: #16171d;

        --black-500: #08080a;
    }

    @media(max-width:1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--black-500);
        color: var(--white);
    }

    body, input, textarea, select, button{
        font: 400 1rem "Montserrat", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;
