import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #a976f7; 
  --div-top-bottom-margin:20px;
  --div-left-right-margin:20px;
  --div-top-bottom-padding:10px;
  --div-left-right-padding:10px;
  --radius: 5px;
  --btn-width: 60%;
  --btn-height: 40px;
  --btn-margin: 10px;
  --btn-padding: 10px;
  --btn-color: #86CCBF;
  --section-color: #E6FFFA;
  --bg-color:  #86CCBF; 
  --text-color-dark :#151717;
  --border-card: 1px solid var(--text-color-dark); 
  --shadow: 6px 8px 15px -6px rgba(0,0,0,0.36);


}
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  color: var(--text-color-dark);
  
  
}
h1,h2,h3,h4,h5,h6 {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
#modal-root {
  position: relative;
}
button {
  
  
}

`;
