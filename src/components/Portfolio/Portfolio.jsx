import React, { useState } from "react";
import SmallModal from "../SmallModal/SmallModal";
import "./portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./portfolioData";
import { Link } from "react-router-dom";
// import girl from '../../images/girly.jpg'

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="heading d-flex justify-content-between align-items-baseline mb-5">
          <div>
            <span>Portfolio</span>
            <h4>Creative Portfolio</h4>
          </div>
          <div></div>
        </div>
        <div className="portfolio-display">
          <div className="row">
            {projects.map((item) => (
              <div className="col-lg-3 col-md-6 col-12 mb-4" key={item.id}>
                <div
                  className={`portfolio-container portfolio-container-${item.id}`}
                >
                  <div class="profile-wrapper">
                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p className="fw-bold text-white">{item.stack}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="view-project-btn"
                      >
                        {" "}
                        <FaExternalLinkAlt /> View Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex my-3 justify-content-end">
            <Link to="/projects" className="btn btn-primary">
              See more
            </Link>
          </div>
          <SmallModal show={show} handleClose={handleClose} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
