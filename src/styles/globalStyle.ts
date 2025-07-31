import { createGlobalStyle } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

//UTILS
import { pxToRem } from '@/utils'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
        body, html { 
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        } 
        h1, h2, p, ul,li,figure { 
        margin: 0; 
        padding: 0; 
        
        }
        .mb-1 {
        margin-bottom: ${pxToRem(16)};
        }

        .mb-2 {
        margin-bottom: ${pxToRem(32)};
        }
`
