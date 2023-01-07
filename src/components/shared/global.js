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
        font-size: 6rem;
        text-transform: uppercase;

    }

    .title-span {
        display: block;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 1.15rem;
        letter-spacing: 2.75px;
        
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
      
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 2rem;
        font-family: 'Barlow Condensed', sans-serif;
        
    }

    .page-padding {
        padding: 0 1.5rem;
        padding-top: 8rem
    }


    @media screen and (min-width: 400px) {
        .page-padding {
            padding: 0 2rem;
            padding-top: 8rem
        }  
        p {
            font-size: 1.5rem;
            line-height: 2.25rem;
            
        }
    }
    

    
`;
