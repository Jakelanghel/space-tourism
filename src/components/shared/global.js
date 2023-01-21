import { createGlobalStyle } from "styled-components";
import { images } from "../../constants/images";
export const GlobalStyles = createGlobalStyle`

    :root {
        --black: #0b0d17;
        --white: #ffff;
        --off-white: #d0d6f9;
        --grey: #4E5057;
    }

    html {
        /* overflow-x: hidden; */
        background-color: var(--black);
        background-image: url(${images.bgDestDesktop});
    }

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    img {
        display: block;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        font-family: 'Bellefair', serif; 
        margin: 0;
        padding: 0;  
     }
     
    h1 {
        text-transform: uppercase;
    }

    p {
        max-width: 400px;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 2.15rem;
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--off-white);
        margin: 0 auto;
    }

    .page-title {
        display: block;
        font-size: 1.15rem;
        font-weight: 300;
        letter-spacing: 2.75px;
        text-transform: uppercase;
        color: var(--off-white);
        font-family: 'Barlow Condensed', sans-serif;
        margin-bottom: 3rem;

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
            padding-left: 1.75rem;
            padding-right: 1.75rem;            
            padding-top: 9rem
        }
         
        p {
            font-size: 1.45rem;
            line-height: 2.5rem;
            
        }
    }

    /* TABLET ======================================================*/

    @media screen and (min-width: 800px) {
       
        p {
            max-width: 515px;
            font-size: 1.5rem
        }

        .page-padding {
            padding-left: 5rem;
            padding-right: 5rem;            
            padding-top: 12rem
        }

        .page-title {
            font-size: 1.5rem;
            letter-spacing: 2.75px;
            text-align: left;
            margin-bottom: 5rem;
        }
    }

    /* DESKTOP ======================================================*/


    @media screen and (min-width: 1025px) {
       
       p {
           max-width: 515px;
           font-size: 1.5rem;
           margin: 0;
       }

       .page-title {
           font-size: 1.5rem;
           letter-spacing: 2.75px;
           text-align: left;
           margin-bottom: 3rem;
       }

       .container-flex {
            flex-direction: row;
       }
   }


   @media screen and (min-width: 1200px) {
        .page-padding {
            padding-left: 8rem;
            padding-right: 8rem;            
        }
   }





    

    
`;
