import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import DefaultFooter from "../components/footer/DefaultFooter";
import Partners from "../components/services/Partners";
import Faq from "../components/services/Faq";
import Testimonial from "../components/home-page/home-3/Testimonial";
import Block from "../components/services/Block";
import Team3 from "../components/team/Team3";
import Link from "next/link";
import VideoBlock from "../components/about/VideoBlock";
import Counter from "../components/about/Counter";

const AboutUsV1 = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us V1" />

      {/* <!--
      =============================================
      Theme Default Menu
      ==============================================
      --> */}
      <DefaulHeader />

      {/*
			=============================================
				Feature Section Fifty One
			==============================================
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Canton Beta Tech
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We are Canton Connect.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Mission</h6>
                <p className="text-lg tx-dark">
                  Our mission is to connect Canton residents with local
                  volunteering opportunities, resources, and events while
                  promoting community involvement and engagement.
                </p>
                <div className="row">{/* <Counter /> */}</div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Our Team</h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <ul>
                <Team3 />
              </ul>
            </div>
            {/* /.row */}

            {/* <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              Our nearly
              <span className="text-decoration-underline fw-500"> 8,000+ </span>
              committed staff members are ready to help.
            </p> */}
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View full team
              </Link>
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div>

      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">GOALS</div>
                  <h2 className="main-title fw-500 tx-dark">Our Goals</h2>
                </div>
                {/* /.title-style-ten */}
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Questions?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/*
        =============================================
        Contact Section One
        ==============================================
        */}
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;
