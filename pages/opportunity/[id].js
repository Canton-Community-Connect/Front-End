import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import SocialShare from "../../components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "../../components/portfolio/CallToAction";
import PortfolioGallery from "../../components/portfolio/portfolio-details/PortfolioGallery";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import opportunitiesData from "../../data/opportunities";
import PortfolioDetailsTitle from "../../components/portfolio/portfolio-details/PortfolioDetailsTitle";

const DynamicPortfolioDetails = () => {
    const router = useRouter();
    const [opportunity, setOpportunity] = useState({});
    const id = router.query.id;

    useEffect(() => {
        if (!id) <h1>Loading...</h1>;
        else setOpportunity(opportunitiesData.find((item) => item.id == id));

        return () => {
        };
    }, [id]);

    return (
        <>
            <Seo pageTitle="Opportunity Details"/>
            {/* <!--
      =============================================
      Theme Default Menu
      ==============================================
      --> */}
            <DefaulHeader/>

            {/*
        =============================================
        Feature Section Fifty One
        ==============================================
        */}
            <PortfolioDetailsTitle portfolio={opportunity}/>

            {/*
			=============================================
				Portfolio Details Two
			==============================================
			*/}
            <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
                <div className="project-desctiption">
                    <div className="container">
                        <div className="row">

                            {/* End .col-lg-8 */}

                            <div className="col-lg-4" data-aos="fade-right">
                                <div className="sidebar ms-xl-5">
                                    <h3 className="mb-20">About</h3>
                                    <p className="border-bottom pb-40 mb-35 lg-pb-20">
                                        {opportunity.title}
                                    </p>
                                    <div className="row">
                                        <ProjectDetails details={opportunity}/>
                                    </div>
                                    {/* End .row */}

                                    <SocialShare/>
                                </div>
                            </div>

                            <div className="col-lg-8" data-aos="fade-left">
                                <ProjectSlide slide={opportunity}/>
                                {/* /#gallery-carousel */}
                            </div>
                            {/* End col-lg-4 */}
                        </div>
                        {/* End .row */}

                        <div className="col-xl-9  mt-120 lg-mt-80">
                            <div
                                className="title-style-twelve mb-45 lg-mb-30 wow fadeInUp"
                                data-aos="fade-up"
                            >
                                <div className="sc-title fst-italic position-relative">
                                    Overview
                                </div>
                            </div>
                            {/* /.title-style-twelve */}
                            <p data-aos="fade-up">
                                {opportunity.details}
                            </p>
                            {/* /.title-style-twelve */}

                        </div>


                        <div className="col-xl-9  mt-120 lg-mt-80">
                            <div
                                className="title-style-twelve mb-45 lg-mb-30 wow fadeInUp"
                                data-aos="fade-up"
                            >
                                <div className="sc-title fst-italic position-relative">
                                    Time Slots
                                </div>
                            </div>

                            <p data-aos="fade-up">
                                <ul >

                                    {opportunity.time_slots?.map((slot, index) => (
                                        <li key={index}>{slot}</li>
                                    ))}

                                </ul>
                            </p>
                            {/* /.title-style-twelve */}

                        </div>

                    </div>
                    {/* End .container */}
                </div>
                {/* /.project-desctiption */}
            </div>
            {/* /.project-details */}

            {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
            <CallToAction/>

            {/*
        =============================================
        Contact Section One
        ==============================================
        */}
            <DefaultFooter/>
        </>
    );
};

export default DynamicPortfolioDetails;
