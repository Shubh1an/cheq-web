import React from "react";
import { SVG } from "../../assets/icons/icons-png";
import Footer from "../../Components/Footer/Footer";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Career.css";
import CareerMiddleContainer from "./Career-Middle-Container/CareerMiddleContainer";

function Career() {
  const TopContent = {
    heading: "Join us in the journey to best",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: SVG.BIAS_ACTION,
    classname: "",
  };
  return (
    <div className="main">
      <div class="parallax__layer parallax__layer--back">
        <TopContainer TopContent={TopContent} />
      </div>
      <div class="parallax">
        <div class="parallax__layer-1 parallax__layer--base team-parallax">
          <CareerMiddleContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Career;
