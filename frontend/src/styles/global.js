import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1600");
    background-size: cover;
   
  }
`;

export default Global;