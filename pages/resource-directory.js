import Seo from "../components/common/Seo";
import Map from "../components/contact/Map";
import DefaulHeader from "../components/header/DefaulHeader";
import SearchBox from "../components/blog/SearchBox";
import Category from "../components/blog/Category";
import DefaultFooter from "../components/footer/DefaultFooter";

const accordionItems = [
  {
    id: 1,
    title: "What are the rules for posting in the community?",
    content:
      "We have a set of guidelines for posting in the community. These include being respectful to others, not posting inappropriate content, and not engaging in spam or self-promotion. Please review the guidelines before posting to ensure that your content is appropriate.",
  },
  {
    id: 2,
    title: "How can I find relevant discussions in the community?",
    content:
      "To find relevant discussions in the community, you can use the search function to look for keywords or topics of interest. You can also browse through the different categories and tags to find discussions on specific subjects.",
  },
  {
    id: 3,
    title: "Can I post job openings or advertisements in the community?",
    content:
      "No, job openings or advertisements are not allowed in the community. Please refrain from posting any promotional content or self-promotion that is not relevant to the community discussion.",
  },
];

export default function ResourceDirectory() {
  return (
    <>
      <Seo pageTitle="Resource Directory" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-two mb-65 lg-mb-40">
                {/* <div className="sc-title-two fst-italic position-relative">
                  Opportunities
                </div> */}
                <h2 className="main-title fw-500 tx-dark text-center text-lg-start ">
                  Welcome to the <span>Resource Directory</span>
                </h2>
                <Map />
              </div>
            </div>
            <div className="col-lg-4 col-md-8 mt-50" data-aos="fade-left">
              <div className="blog-sidebar md-mt-70">
                <div className="blog-sidebar-search mb-55 md-mb-40">
                  <SearchBox />
                </div>
                <div className="blog-sidebar-category mb-60 md-mb-50">
                  <h4 className="sidebar-title">Community Resources</h4>
                  <Category />
                </div>
                <h4 className="sidebar-title">Community FAQs</h4>

                <div
                  className="accordion accordion-style-two "
                  id="accordionOne"
                >
                  {accordionItems.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <div
                        className="accordion-header"
                        id={`heading${item.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            item.id === 2 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={item.id === 1 ? "true" : "false"}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.title}
                        </button>
                      </div>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse${
                          item.id === 1 ? " show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-body">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        {/* <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        /> */}
      </div>
      <DefaultFooter />
    </>
  );
}
