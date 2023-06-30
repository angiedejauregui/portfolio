import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About(props) {
  const CVlenguague = () => {
    return props.t("about.downloadCV") == "CVenglish"
      ? props.CVenglish
      : props.CVespañol;
  };

  return (
    <AboutContainer id="about" className="d-flex justify-content-center gap-5">
      <div>

        <h3>{props.t("about.hello")}</h3>
        <h1>Angeles de Jauregui</h1>
        <h3>{props.t("about.specialization")}</h3>
        <p>{props.t("about.aboutMe")}</p>

        <div className="d-flex my-4" id="see-more" onClick={CVlenguague()}>
          <a href={CVlenguague()} download="Ángeles de Jauregui CV">
            <button id="cv">{props.t("about.CV")}</button>
          </a>

          <div id="contact-options">
            <a href="https://github.com/angiedejauregui" target="_blank">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A1ngeles-de-jauregui
              "
              target="_blank"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://i.postimg.cc/jdfkshkK/Dise-o-sin-t-tulo.png"
        alt="picture of me"
      ></img>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.section`
  color: white;
  padding: 12rem 0rem;
  color: ${({ theme }) => theme.text};
  h1 {
    font-size: 50px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    width: 570px;
  }
  #cv {
    background: var(--primary-color);
    padding: 1rem;
    color: var(--bg-color);
    border-radius: 2rem;
    width: 13rem;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
  }
  img {
    height: 250px;
    width: auto;
    border-radius: 2rem;
  }
  #contact-options {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4rem;
    gap: 4rem;
  }
  .icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
  }
  .icon:hover {
    color: var(--primary-color);
    animation-name: icon;
    animation-duration: 1s;
  }
  @keyframes icon {
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 950px) {
    padding: 8rem 1.5rem 2rem 1.5rem;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.5rem;
    img {
      height: auto;
      width: 250px;
    }
    h1 {
      font-size: 40px;
    }
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
      margin: 1rem;
    }
    h1,
    h3,
    p {
      width: auto;
      text-align: center;
    }
    #see-more {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    #contact-options {
      margin: 2rem;
      justify-content: center;
      align-items: center;
    }
  }
`;
