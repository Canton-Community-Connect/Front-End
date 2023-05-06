import Link from "next/link";
import opportunitiesData from "../../data/opportunities";
import Image from "next/image";

const OppList = ({tag}) => {
  return (
    <>
      {opportunitiesData.filter(opp => tag== null || opp.tag == tag).slice(0, 4).map((opportunity) => (
        <article
          className={`blog-meta-three mb-80 lg-mb-40 ${opportunity.className}`}
          key={opportunity.id}
          data-aos="fade-up"
          data-aos-delay={opportunity.delay}
        >
          {opportunity.imageSrc && (
            <figure className="post-img m0">
              <Link href={`/opportunity/${opportunity.id}`} className="w-100 d-block">
                <Image
                  width={800}
                  height={450}
                  src={opportunity.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
          )}
          <div className="post-data mt-40 lg-mt-30">
            <div className="post-date opacity-75 text-uppercase">
              {opportunity.date}
            </div>
            <Link href={`/opportunity/${opportunity.id}`} className="mt-10 mb-25 lg-mb-20">
              <h4 className="tran3s blog-title xl tx-dark">{opportunity.title}</h4>
            </Link>
            <div>
              <Link
                href={`/opportunity/${opportunity.id}`}
                className="read-btn-two fw-500 tran3s"
              >
                Read More
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default OppList;
