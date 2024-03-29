import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper";
import { projects } from "../../components/Portfolio/portfolioData";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <PageWrapper>
      <div className="programs-section pt-200">
        <div className="container">
          <div className="my-5">
            <h3 className="mb-5 text-center">Projects</h3>
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
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
