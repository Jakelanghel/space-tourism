import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --black: #0b0d17;
        --white: #ffff;
        --off-white: #d0d6f9;
        --grey: #4E5057;
    }

    html {
        overflow-x: hidden;
        background-color: var(--black);
    }

    img {
        display: block;
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
        text-transform: uppercase;
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
        font-size: 1.16rem;
        font-weight: 300;
        line-height: 2.15rem;
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--off-white);
        
    }

    .title-sml {
        display: block;
        font-size: 1.15rem;
        font-weight: 300;
        letter-spacing: 2.75px;
        text-transform: uppercase;
        color: var(--off-white);
        font-family: 'Barlow Condensed', sans-serif;
        

        span {
            font-weight: 900;
            letter-spacing: 3px;
            color: var(--grey);
            margin-right: 1rem;
        }
        
    }

    .page-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 8rem
    }


    @media screen and (min-width: 400px) {

        h1 {
            font-size: 6rem;
        }

        .page-padding {
            padding-left: 1.5rem;
            padding-right: 1.5rem;            
            padding-top: 9rem
        }
         
        p {
            font-size: 1.5rem;
            line-height: 2.5rem;
            
        }
    }
    

    
`;
