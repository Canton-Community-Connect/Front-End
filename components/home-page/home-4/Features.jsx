const features = [
  {
    icon: "/images/icon/icon_44.svg",
    title: "Organizer",
    color: "#FF5555",
    description: "Organized 5 events",
    delay: 100,
  },
  {
    icon: "/images/icon/icon_45.svg",
    title: "Go-Getter",
    color: "#36E0D1",
    description: "Volunteered 5 times",
    delay: 200,
  },
  {
    icon: "/images/icon/icon_46.svg",
    title: "Communicator",
    color: "#FFD94F",
    description: "Reached out to an organizer",
    delay: 300,
  },
  // {
  //   icon: "/images/icon/icon_47.svg",
  //   title: "Feedback",
  //   color: "#B855FF",
  //   delay: 400,
  // },
];

const Features = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div className="card-style-seven mb-30 text-center position-relative tran3s ">
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-35">{feature.title}</h4>
            <a href="#" className="read-btn tran3s">
              {feature.description}
            </a>
            <span
              className="ribbon position-absolute"
              style={{ background: feature.color }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
