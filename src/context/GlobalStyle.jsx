import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Sequel';
    src: url('src/assets/fonts/Sequel_Demo.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Sequel', Arial, sans-serif; // Correction ici pour utiliser "Sequel"
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }

  button {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  input, textarea {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
    padding: 10px;
    margin: 5px 0;
    width: 100%;
  }
`;

export default GlobalStyle;
