import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import CVenglish from "./downloads/CV-english.pdf";
import CVespañol from "./downloads/CV-español.pdf";

const DarkTheme = {
  secondary: "#150630",
  background: "#110c25",
  text: "#fcfcfc",
  nav: "#110c25",
  links: "#884afa",
};
const LightTheme = {
  secondary: "#e5e5e8",
  background: "#fcfcfc",
  text: "#110c25",
  nav: "#884afa",
  links: "#110c25",
};
const Themes = {
  dark: DarkTheme,
  light: LightTheme,
};

function App(props) {
  const [theme, setTheme] = useState("dark");
  const [t, i18n] = useTranslation("global");

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Container>
        <Navbar theme={theme} setTheme={setTheme} t={t} i18n={i18n} />

        <main>
          <About
            t={t}
            CVenglish={CVenglish}
            CVespañol={CVespañol}
            i18n={i18n}
          />

          <Skills t={t} />
          <Projects t={t} />
          <Contact t={t} />
        </main>
        <Footer t={t} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text} !important;
  font-family: "Lato", sans-serif;
`;
