import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  const [position, setPosition] = useState(true);
  const [burger, setBurger] = useState(false);

  const changeMode = () => {
    if (props.theme === "dark") {
      props.setTheme("light");
      changePosition();
    } else {
      props.setTheme("dark");
      changePosition();
    }
  };

  const changePosition = () => {
    setPosition(!position);
  };

  const handleLanguage = (e) => {
    props.i18n.changeLanguage(e.target.value);
  };

  return (
    <NavContainer burger={burger}>
      <h3>Angie</h3>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => setBurger(!burger)}>
              {props.t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setBurger(!burger)}>
              {props.t("navbar.skills")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setBurger(!burger)}>
              {props.t("navbar.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setBurger(!burger)}>
              {props.t("navbar.contact")}
            </a>
          </li>
        </ul>
        <Settings position={position} id="settings">
          <div onClick={() => changeMode()} id="colorTheme">
            <button>
              <FontAwesomeIcon
                icon={position ? "fa-solid fa-moon" : "fa-solid fa-sun"}
                className="theme-icon"
              />
            </button>
          </div>
          <select onClick={handleLanguage} id="changeLanguage">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </Settings>
      </nav>
      <BurgerMenu burger={burger} onClick={() => setBurger(!burger)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.nav};
  height: 4.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--bg-color);
    font-weight: 600;
    line-height: 4.5rem;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
    gap: 4rem;
    text-align: center;

    a {
      color: var(--bg-color);
      text-decoration: none;
      font-size: 1.2rem;
      &:hover {
        color: ${({ theme }) => theme.links};
        transition: all 300ms;
      }
    }
  }
  @media (max-width: 950px) {
    nav {
      flex-direction: column;
      justify-content: center !important;
      align-items: center !important;
      gap: 2rem;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 280px;
      background-color: var(--primary-color);
      margin: 0;
      z-index: 0;
      right: ${({ burger }) => (!burger ? "0" : "-280px")};
      transition: all 0.5s ease-in-out;
      ul {
        flex-direction: column;
        margin-right: 2rem;

        a {
          &:hover {
            color: var(--bg-color);
          }
        }
      }
    }
    h3 {
      position: fixed;
      line-height: 4.5rem;
      left: 3rem;
    }
  }
`;

const Settings = styled.div`
  display: flex;
  gap: 2rem;

  #colorTheme {
    background-color: var(--bg-color);
    border-radius: 5rem;
    width: 3.3rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    padding: 3.3px;

    button {
      position: relative;
      right: ${({ position }) => (position ? "0rem" : "-1.4rem")};
      line-height: 1.8rem;
      bottom: 0.5px;
      z-index: 88;
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: var(--primary-color);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
    }
    .theme-icon {
      font-size: 1rem;
      color: var(--bg-color);
    }
  }
  #changeLanguage {
    background-color: var(--bg-color);
    border: none;
    padding: 0.3rem;
    border-radius: 0.5rem;
    position: relative;
    z-index: 5;
    font-size: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
    z-index: 4;
    gap: 3rem;

    #colorTheme {
      position: static;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      margin: auto;
      left: ${({ position }) => (position ? "-0.7rem" : "0.7rem")};
    }
  }
`;

const BurgerMenu = styled.div`
  position: absolute;
  @media (max-width: 950px) {
    position: fixed;
    line-height: 4.5rem;
    right: 1rem;
    z-index: 12;

    div {
      width: 2.7rem;
      height: 0.25rem;
      background-color: var(--bg-color);
      color: red;
      margin: 0.6rem;
      border-radius: 2px;

      &:nth-child(1) {
        transform: ${({ burger }) =>
          !burger ? "rotate(45deg) translate(10px, 10px)" : "rotate(0)"};
        transition: ease-out 0.8s;
        margin-right: 0 !important;
      }
      &:nth-child(2) {
        opacity: ${({ burger }) => (!burger ? 0 : 1)};
        transition: ease-out 0.5s;
      }
      &:nth-child(3) {
        transform: ${({ burger }) =>
          !burger ? "rotate(-45deg) translate(10px, -10px)" : "rotate(0)"};
        transition: ease-out 0.5s;
      }
    }
  }
`;
