const ProjectDetails = ({ details }) => {
  if (!details || !details) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Date</div>
        <div className="pt-text">{details.date}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Title
        </div>
        <div className="pt-text">{details.title}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Cause
        </div>
        <div className="pt-text">{details.cause}</div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
