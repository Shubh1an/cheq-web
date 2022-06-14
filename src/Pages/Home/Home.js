import React, { useEffect, useState } from "react";
import { SVG } from "../../assets/icons/icons-png";
import Button from "../../Components/Button/Button";
import ProfileContainer from "../../Components/Card/ProfileCard/ProfileContainer";
import Container from "../../Components/CommonContainer/CommonContainer";
import Slider from "../../Components/Slider/Slider";
import Slider1 from "../../Components/Slider/Slider1";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Home.css";
import Footer from "../../Components/Footer/Footer";
import { NewsData, ProfileData } from "../../Data/DummyData";

import {
  LeftMobile,
  MiddleMobile,
  MultiTaskingImage,
  RightMobile,
} from "../../assets/icons/Icon-container";
import { useNavigate } from "react-router-dom";

function Home() {
  const [rotateRight, setRotateRight] = useState(320);
  const [rotateLeft, setRotateLeft] = useState(42);
  const [opacity, setOpacity] = useState(1);
  const TopContent = {
    heading: "Track and pay bills of all your Debt",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way. Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way.",
    cardImg: SVG.MOBILE_PIC,
    classname: "top-content",
  };
  let lastScrollTop = 0;
  function dir() {
    const position = window.scrollY;
    let opa = (opacity / position) * 5;
    let right = rotateRight + position / 0.48;
    let left = rotateLeft - position / 0.51;

    // or window.addEventListener("scroll"....
    let st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code

      if (position > 0) {
        setOpacity(opa);
        if (322 < right && right < 366) {
          console.log("righttt", right);
          setRotateRight(360);
        } else {
        }
        if (-10 < left && left < 42) {
          console.log("first", left, 0 < left && left < 42);

          setRotateLeft(0);
        }
      }
    } else {
      //scroll up
      if (window.scrollY > 1) {
        setOpacity(opa * 10);

        if (!322 < right && right < 366) {
          setRotateRight(320);
        } else {
        }
        if (!0 < left && left < 42) {
          setRotateLeft(42);
        }
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
  const handleScroll = () => {
    dir();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };
  //hello
  return (
    <>
      <div className="parallax">
        <div class="parallax__layer parallax__layer--back">
          <Container
            inner={`commonClass ${
              TopContent.classname && TopContent.classname
            }`}
          >
            <h2 style={{ opacity: opacity }}>{TopContent.heading}</h2>
            <p style={{ opacity: opacity }}>{TopContent.subText}</p>
          </Container>
        </div>

        <div className="parallax-mobile-container Mobile-image-container">
          <div className="Mobile-box">
            <div
              style={{
                transform: `rotate(${rotateRight}deg)`,
                // transition: "5s ease-in",
              }}
              className={`left-mobile-pic `}
            >
              <LeftMobile leftClass="side-mobile" />
            </div>
            <div
              style={{
                transform: `rotate(${rotateLeft}deg)`,
              }}
              className={`right-mobile-pic `}
            >
              <RightMobile rightClass="side-mobile" />
            </div>
            <div className="middle-mobile-pic">
              <MiddleMobile middleClass="middle-mobile" />
            </div>
          </div>
        </div>
        <div className="parallax__layer-1 parallax__layer--base">
          <Container inner="people-container">
            <div className="top-home-container">
              <h3 className="head-title">Our People</h3>
              <p>
                We’re excited to announce that CheQ has raised in seed funding
                from ABC
              </p>
            </div>
            <div className="people-bottom-container">
              <div className="flex-left left-style">
                <div className="side-container">
                  <h3 className="head-title">Our People</h3>
                  <p>
                    We’re excited to announce that CheQ has raised in seed
                    funding from ABC
                  </p>
                </div>
                <Button
                  handleFunction={() => handleNavigate("team")}
                  bttnClass="people-btn"
                >
                  See All
                </Button>
              </div>
              <div className="flex-right right-style">
                <Slider1 />
              </div>
            </div>
            <div className="background-blur"></div>
          </Container>
          <Container inner="home-middle-container">
            <div className="flex-left blessed-left-flex">
              <h3 className="blessed-title head-title">Blessed & Backed by</h3>
              <p className="blessed-text-content">
                <span className="party-icon">
                  <img src={SVG.PARTY_ICON} />
                </span>
                <span>
                  We’re excited to announce that CheQ has raised{" "}
                  <span className="bold">$34</span> in seed funding from ABC
                </span>
              </p>
            </div>
            <div className="flex-right boxes-container">
              <div className="square-box"></div>
              <div className="square-box"></div>
              <div className="square-box"></div>
              <div className="square-box"></div>
            </div>
          </Container>
          <Container inner="home-middle-container-1">
            <h3 className="news-title">In News</h3>
            <Slider sliderInner="news-icon-container">
              {NewsData.map((newsIcon, index) => (
                <img key={index} src={newsIcon.img} className="news-icon" />
              ))}
            </Slider>
          </Container>
          <div className="top-main-content">
            <div className="left-content">
              <h2>Join us on this Journey</h2>
              <p>
                We’re excited to announce that CheQ has raised in seed funding
                from ABC
              </p>
              <Button
                handleFunction={() => handleNavigate("career")}
                bttnClass="people-btn-top"
              >
                Explore Opportunity
              </Button>
            </div>
            <div className="right-content">
              <MultiTaskingImage MultiTaskClass="multi-task-image" />
            </div>
            <Button
              handleFunction={() => handleNavigate("career")}
              bttnClass="people-btn-below"
            >
              Explore Opportunity
            </Button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
