const ProjectDetails = ({details}) => {
    if (!details || !details) {
        return null; // or a message indicating that there are no project details
    }

    return (
        <>
            {/* End .col-12 */}

            <div className="col-12 mb-35">
                <div className="pt-title fw-bold tx-dark text-uppercase">
                    Cause
                </div>
                <div className="pt-text">{details.cause}</div>
            </div>

            <div className="col-12 mb-35">
                <div className="pt-title fw-bold tx-dark text-uppercase">When</div>
                <div className="pt-text">{details.date}</div>
            </div>

            <div className="col-12 mb-35">
                <div className="pt-title fw-bold tx-dark text-uppercase">
                    Where
                </div>
                <div className="pt-text">{details.location}</div>
            </div>

            <div className="col-12 mb-35">
                <div className="pt-title fw-bold tx-dark text-uppercase">
                    Incentive
                </div>
                <div className="pt-text">{details.incentive}</div>
            </div>
            <div className="col-12 mb-35">
                <div className="pt-title fw-bold tx-dark text-uppercase">
                    Requirements
                </div>
                <div className="pt-text">{details.requirements}</div>
            </div>
            {/* End .col-12 */}
        </>
    );
};

export default ProjectDetails;
