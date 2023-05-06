import Seo from "../../components/common/Seo";
import EventForm from "../../components/opportunity/EventForm";
import DefaultFooter from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";

const contact = () => {
  return (
    <>
      <Seo pageTitle="Create Event" />
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
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <h4 className="fw-500 tx-dark">
                  Add Volunteer Opportunity in Canton.
                </h4>
                <h8>*Organization account required</h8>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
        =============================================
        Create Event
        ==============================================
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container"></div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <EventForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>

      {/*
        =============================================
        Contact Section One
        ==============================================
        */}
      <DefaultFooter />
    </>
  );
};

export default contact;
