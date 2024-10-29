import { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const lightTheme = {
  background: "#f5f5f5",
  color: "#000",
};

const darkTheme = {
  background: "#333",
  color: "#fff",
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
