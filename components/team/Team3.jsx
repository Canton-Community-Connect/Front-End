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


            <li>
              <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
            </li>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team3;
