import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

function Projects() {
  const [t, i18n] = useTranslation("global");



  const projects = [
    {
      name: t("projects.pomodoroClock"),
      img: "https://i.postimg.cc/m25Nc8fL/pomodoro-image.jpg",
      website: "https://angiedejauregui.github.io/PomodoroClock/",
      github: "https://github.com/angiedejauregui/PomodoroClock",
    },
    {
      name: t("projects.calculator"),
      img: "https://i.postimg.cc/bNGw4RDt/Screenshot-calculator.png",
      website: "https://angiedejauregui.github.io/calculator/",
      github: "https://github.com/angiedejauregui/calculator",
    },
    {
      name: t("projects.drumMachine"),
      img: "https://i.postimg.cc/Px2G6cxk/screnshoot-drum-machine.jpg",
      website:
        "https://cdpn.io/pen/debug/mdjWRJb?authentication_hash=YvAgOLqPxpoA",
      github: "https://github.com/angiedejauregui/drum-machine",
    },
    {
      name: t("projects.cryptoPrices"),
      img: "https://i.postimg.cc/kXFjWygg/crypto-prices.jpg",
      website: "https://angiedejauregui.github.io/crypto-prices",
      github: "https://github.com/angiedejauregui/crypto-prices",
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>{t("projects.title")}</h2>
      <Swiper
      
        slidesPerView={1}
        centeredSlides={true}
        lazyLoading={true}
        loop={true}
        keyboardControl={true}
        mousewheelControl={true}
        onMouseEnter={() => {this.swiper.autoplay.stop()}}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: "#button-next",
          prevEl: "#button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        }}
        modules={[Navigation, Pagination]}
        className="swiper"
      >
        {projects.map((projects) => (
          <SwiperSlide>
            <figure id="sobremi" key={projects.name}>
              <img src={projects.img} alt={projects.name} />
              <figcaption>
                {projects.name}
                <div className="d-flex justify-content-center gap-4 mt-3">
                  <p>
                    <a href={projects.website} target="_blank">
                      {t("projects.website")}
                    </a>
                  </p>
                  <p>
                    <a href={projects.github} target="_blank">
                      GitHub
                    </a>
                  </p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
        <div className="swiper-buttons">
          <FontAwesomeIcon icon="fa-solid fa-angle-left" id="button-prev" />
          <FontAwesomeIcon icon="fa-solid fa-angle-right" id="button-next" />
        </div>
        <span className="swiper-pagination"></span>
      </Swiper>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.section`
  text-align: center;
  margin: 200px 100px 0 100px;

  h2 {
    margin: 70px;
  }
  img {
    width: 380px;
    height: 250px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  figcaption {
    color: var(--bg-color);
    height: 115px;
    background-color: #000000a5;
    width: 380px;
    margin: auto;
    font-size: 25px;
    padding: 0.6rem;
    border-radius: 0 0 0.5rem 0.5rem;
    position: relative;
    bottom: 7.1rem;
    text-align: center;
  }

  .swiper-slide figcaption {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  .swiper-slide-active figcaption {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    opacity: 1;
    color: var(--bg-color);
    font-size: 1rem;
    background-color: var(--primary-color);
    color: var(--bg-color);
    border-radius: 0.5rem;
    width: 8rem;
    cursor: pointer;
    text-align: center;
    line-height: 2rem;
  }
  .swiper-buttons {
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    position: relative;
    bottom: 17rem;
    z-index: 2;
  }
  #button-next,
  #button-prev {
    background-color: var(--primary-color);
    border-radius: 5rem;
    width: 2rem;
    height: 2rem;
    padding: 0.8rem;
    cursor: pointer;
  }

  .swiper-pagination .swiper-pagination-bullet {
    background-color: var(--primary-color);
    position: relative;
    bottom: 8rem;
  }

  @media screen and (max-width: 1170px) {
    margin: 0;
    img {
      width: 330px;
      height: 200px;
    }
    figcaption {
      width: 330px;
    }
  }
  @media screen and (max-width: 720px) {
    .swiper-buttons {
      display: none;
    }
    .swiper-pagination .swiper-pagination-bullet {
      bottom: 4rem;
    }
  }
`;
