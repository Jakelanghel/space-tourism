import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --black: #0b0d17;
        --white: #ffff;
        --off-white: #d0d6f9;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4 {
        font-family: 'Bellefair', serif;   
     }

    h1 {
        font-size: 150px;
    }

    h2 {
        font-size: 100px;

    }

    h3 {
        font-size: 56px;

    }

    h4 {
        font-size: 32px;
    }

    h5 {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        letter-spacing: 4.75px;
    }
    
`;
