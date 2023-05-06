const accordionItems = [
  {
    id: 1,
    title: "Increase awareness",
    content:
      "To increase awareness of volunteering opportunities in Canton and encourage broader participation in community efforts.",
  },
  {
    id: 2,
    title: "Encourage broader participation",
    content:
      "To break the pattern of the same people continuously volunteering by offering incentives to all users who partake in volunteer activities.",
  },
  {
    id: 3,
    title: "Provide an easy-to-use platform",
    content:
      "To provide an easy-to-use platform for residents to discover and participate in local events and resources.",
  },
  {
    id: 4,
    title: "Foster community involvement",
    content:
        "To foster a stronger sense of community involvement and engagement among Canton residents.",
  },
  {
    id: 5,
    title: "Track and report the impact",
    content:
        "To track and report on the impact of the app on the community, including the number of users, volunteer hours logged, and events attended.",
  }
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
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
  );
};

export default Faq;
