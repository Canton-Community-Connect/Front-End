import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Shadi Banitaan",
    role: "",
    imgSrc: "/images/team/img_04.jpg",
  },
  {
    id: 2,
    name: "Ali Dado",
    role: "",
    imgSrc: "/images/team/img_05.jpg",
  },
  {
    id: 3,
    name: "Suhib Rawshdeh",
    role: "",
    imgSrc: "/images/team/img_06.jpg",
  },
  {
    id: 4,
    name: "Jimmy Dari",
    role: "",
    imgSrc: "/images/team/img_07.jpg",
  },
  {
    id: 5,
    name: "Eyiara Oladipo",
    role: "",
    imgSrc: "/images/team/img_07.jpg",
  },
];

const Team3 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team3;
