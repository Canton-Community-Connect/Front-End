import Image from "next/image";

const CampaignBlock = () => {
  const campaigns = [
    {
      imgSrc: "/images/opportunities/Plant-service.jpeg",
      goal: "$123,000",
      daysLeft: "2",
      ribbonBg: "#FF3F64",
      title: "Animal Shelter",
      description:
        "A local kitten needs a new home as its owner is relocating out of the country. We are searching for a loving family to adopt the kitten.",
      aosDelay: "100",
    },
    {
      imgSrc: "/images/opportunities/Plant-service.jpeg",
      goal: "$47,000",
      daysLeft: "3",
      ribbonBg: "#FFBA3C",
      title: "Local Garden",
      description:
        "Looking for a few volunteers, preferably local to Canton Memory Care center to help clean up the commons area in the center.",
      aosDelay: "200",
    },
    {
      imgSrc: "/images/opportunities/Plant-service.jpeg",
      goal: "$320,000",
      daysLeft: "5",
      ribbonBg: "#00E38A",
      title: "Senior Care",
      description:
        "We are seeking a small group of volunteers to assist with furniture relocation for a senior member of the Canton community.",
      aosDelay: "300",
    },
    {
      imgSrc: "/images/opportunities/Plant-service.jpeg",
      goal: "$47,000",
      daysLeft: "3",
      ribbonBg: "#FFBA3C",
      title: "Community Cleanup",
      description:
        "We are in need of several volunteers to clean up the ditch on Palmer and Haggerty roads.",
      aosDelay: "400",
    },
  ];

  return (
    <>
      {campaigns.map((campaign, index) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={campaign.aosDelay}
          key={index}
        >
          <div className="card-style-eight mt-40 ">
            <div className="img-meta position-relative">
              <Image
                width={264}
                height={165}
                style={{ filter: "brightness(0.5)" }}
                src={campaign.imgSrc}
                alt=""
                className="lazy-img w-100"
              />
              <div className="donation-goal d-flex align-items-center justify-content-between position-absolute">
                <div className="fw-500 text-white fs-20">{campaign.title}</div>
              </div>
            </div>
            <div className="text-meta pt-40  pe-2 ">
              <p className="mb-40">{campaign.description}</p>
              {/* <a href="#" className="btn-ten fs-16 fw-500 position-relative">
                Donate Now <i className="fa-solid fa-angle-right" />
              </a> */}
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-eight */}
        </div>
      ))}
    </>
  );
};

export default CampaignBlock;
