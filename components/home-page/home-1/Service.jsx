import Link from "next/link";

const services = [
  {
    icon: "images/icon/icon_104.svg",
    title: "Technology",
    delayAnim: 0,
  },
  {
    icon: "images/icon/icon_105.svg",
    title: "Health care",
    delayAnim: 100,
  },
  {
    icon: "images/icon/icon_106.svg",
    title: "Community",
    delayAnim: 200,
  },
  {
    icon: "images/icon/icon_107.svg",
    title: "Education/Literacy",
    delayAnim: 300,
  },
  {
    icon: "images/icon/icon_107.svg",
    title: "Human Rights",
    delayAnim: 0,
  },
  {
    icon: "images/icon/icon_107.svg",
    title: "Senior Care",
    delayAnim: 100,
  },
  {
    icon: "images/icon/icon_107.svg",
    title: "Animals",
    delayAnim: 200,
  },
  {
    icon: "images/icon/icon_107.svg",
    title: "Nature",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon">
              <img src={service.icon} alt="" className="lazy-img m-auto" />
            </div>
            <p className="fs-20 m0 pt-20">View</p>
            <h4 className="tx-dark">{service.title}</h4>
            {/* TODO: Update link to take to opportunities page */}
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
