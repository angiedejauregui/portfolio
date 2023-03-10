import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    name: "React",
    icon: faReact,
    color: "#5ed4f4",
  },
  {
    name: "Bootsrap",
    icon: faBootstrap,
    color: "#6f42c1",
  },
  {
    name: "JavaScript",
    icon: faJsSquare,
    color: "#efd81d",
  },
  {
    name: "CSS",
    icon: faCss3,
    color: "#2814d9",
  },
  {
    name: "HTML",
    icon: faHtml5,
    color: "#f06529",
  },
];

function Skills(props) {
  return (
    <SkillsContainer id="skills">
      <h2 className="title">{props.t("skills.title")}</h2>
      <div id="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <FontAwesomeIcon
              className="icon my-2"
              icon={skill.icon}
              color={skill.color}
            />
            <p className="name">{skill.name}</p>
          </div>
        ))}
      </div>
    </SkillsContainer>
  );
}

export default Skills;

const SkillsContainer = styled.section`
  padding-top: 10px;
  #skills {
    display: flex;
    justify-content: center;
  }
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    margin: 30px;
    width: 140px;
    height: 140px;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.secondary};
  }
  .icon {
    font-size: 4rem;
  }
  .name {
    padding-bottom: 0;
  }
  @media screen and (max-width: 970px) {
    padding: 0;
    #skills {
      display: grid;
      grid-template-columns: 200px 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
