import DefaulHeader from "../components/header/DefaulHeader";
import Seo from "../components/common/Seo";
import Blog from "../components/home-page/home-8/Blog";
import CampaignBlock from "../components/home-page/home-4/CampaignBlock";

import Link from "next/link";
import Features from "../components/home-page/home-4/Features";
const userData = {
  firstName: "Bob",
  lastName: "Bobbington",
  level: 200,
  address: "123 Fake Street",
  phone: "313-313-3133",
  email: "Bob@gmail.com",
  role: "Events Organizer",
  badges: ["Animal rescuer", "Green thumb"],
};

const Profile = () => {
  return (
    <>
      <Seo pageTitle="Profile" />
      <DefaulHeader />

      <div className="fancy-feature-thirtySix mt-180 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-4 mb-50">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h3 className="main-title">
                    {userData.firstName} {userData.lastName}
                  </h3>
                  <h6 className="mt-20">Level: {userData.level}</h6>
                  {["Address", "Phone", "Email", "Role"].map((attr) => {
                    return (
                      <p className="mt-20" key={attr}>
                        {attr}: {userData[attr.toLowerCase()]}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Right menu */}
              <div className="col-lg-8 " data-aos="fade-left">
                <div className="row">
                  <h6 className="main-title text-lg-start text-center">
                    Badges Awarded:
                  </h6>
                  <Features />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-right">
        <div className="wrapper position-relative">
          <div className="row">
            <h3>Volunteering History</h3>
          </div>
          <div className="row">
            {/* <div className="blog-section-four position-relative">
              <div className="container">
                <div className="row gx-xxl-5">
                  <Blog />
                </div>
              </div>
            </div> */}
            <div className="fancy-feature-eighteen " data-aos="fade-up">
              <div className="d-sm-flex">
                <CampaignBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
