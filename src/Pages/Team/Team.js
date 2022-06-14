import React from "react";
import { SVG } from "../../assets/icons/icons-png";
import ProfileContainer from "../../Components/Card/ProfileCard/ProfileContainer";
import Container from "../../Components/CommonContainer/CommonContainer";
import Footer from "../../Components/Footer/Footer";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Team.css";
import { ProfileData } from "../../Data/DummyData";
function Team() {
  const TopContent = {
    heading: "Meet the founders & Team",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: SVG.FANS_PIC,
    classname: "",
  };

  return (
    <>
      <div class="parallax__layer parallax__layer--back">
        <TopContainer TopContent={TopContent} />
      </div>
      <div class="parallax">
        <div class="parallax__layer-1 parallax__layer--base team-parallax">
          <Container inner="team-container">
            <h3 className="head-title">A - Team</h3>
            <p>
              Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding
              way.
            </p>
            <div className="background-blur"></div>
          </Container>
          <Container inner="profileContainer">
            {ProfileData.map((profile, index) => (
              <ProfileContainer
                customstyle="profile-style1"
                profileContent="profile-content1"
                profile={profile}
                key={index}
              />
            ))}
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Team;
