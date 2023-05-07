import Link from "next/link";
import { blogItems } from "../../data/menu";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown mega-dropdown-md ">
            <Link className="nav-link" href="/" role="button">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link href="/opportunity/search">
              <div className="nav-link dropdown-toggle">Opportunities</div>
            </Link>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link href={blog.link} className="dropdown-item">
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/resource-directory" role="button">
              Resource Directory
            </Link>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/about-us" role="button">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
          <li className="nav-item d-lg-none">
            <Link className="nav-link" href="/profile" role="button">
              My Account
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/opportunity/create"
              className="btn-twentyOne fw-500 tran3s"
            >
              Create Event
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
