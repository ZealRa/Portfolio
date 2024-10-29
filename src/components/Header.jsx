import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext"; // Utilisez le contexte de langue
import styled from "styled-components";
import translations from "../translations";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Title = styled.h1`
  font-family: "Sequel", sans-serif;
  margin: 0;
`;

const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const LanguageButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage(); // Utilisez le contexte de langue

  return (
    <HeaderContainer>
      <Title>{translations[language].title}</Title>
      <div>
        <a
          href="https://github.com/ZealRa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/github-brands-solid.svg"
            alt="GitHub"
            width="30"
          />
        </a>
        <LanguageButton
          onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        >
          {language === "fr" ? "FR" : "EN"}
        </LanguageButton>
        <ThemeButton onClick={toggleTheme}>
          {isDarkMode
            ? translations[language].dayMode
            : translations[language].nightMode}
        </ThemeButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
