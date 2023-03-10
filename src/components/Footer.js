import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <FooterContainer>
      <p>2023 &copy; Ángeles de Jauregui</p>
      <a href="#about">
        <FontAwesomeIcon icon="fa-solid fa-arrow-up" className="up" />
      </a>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  color: var(--primary-color);
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  .up {
    background-color: var(--primary-color);
    color: var(--bg-color);
    font-size: 1.8rem;
    padding: 0.8rem;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    position: absolute;
    right: 2rem;
    animation-name: up;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @keyframes up {
    50% {
      transform: translate3d(0, -20%, 0);

      transition: all 0.3s ease-in-out;
    }
  }
  @media screen and (max-width: 720px) {
    .up {
      right: 1rem;
      font-size: 0;
      height: 1.5rem;
      width: 1.5rem;
      padding: 0.4rem;
    }
  }
`;
