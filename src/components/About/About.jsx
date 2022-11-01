import React from "react";
import "./about.css";
import ogo from "../../images/ogo1.png";
import ogoresume from "./ogochukwu-odom-resume.pdf";

const About = () => {
  return (
    <div id="about" className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3">
            <div className="image-box text-center">
              <img src={ogo} alt="" className="img-fluid dev-small-image" />
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-3 d-flex align-items-center">
            <div className="px-4 ">
              <div>
                <p>About Me</p>
                <h4>Creative Web Developer based in Nigeria</h4>
                <div className="my-2">
                  <div className="row ">
                    <div className="col-lg-4 col-md-12 mb-3">
                      <div className="about-card">
                        <div className="d-flex">
                          <h2 className="mb-0 count fw-bold me-2">4</h2>
                          <h5 className="mb-0">
                            {" "}
                            years <br></br>Experience
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                      <div className="about-card">
                        <div className="d-flex">
                          <h2 className="mb-0 count fw-bold me-2">8</h2>
                          <h5 className="mb-0">
                            {" "}
                            Completed <br></br>Projects
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3">
                      <div className="about-card">
                        <div className="d-flex">
                          <h2 className="mb-0 count fw-bold me-2">24/7</h2>
                          <h5 className="mb-0">
                            {" "}
                            Online <br></br>Support
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  I'm a creative Web Developer who is passionate and dedicated
                  to my work. I have over 3 years experience as a professional
                  web developer and I have acquired the skills and knowledge
                  necessary to make your project a success. I enjoy every step
                  of the design process, from discussion, ideation and
                  collaboration.
                </p>
                <p>
                  I code and create web applications for amazing people around
                  the world. I work with Vue, Nuxt, Graphql, Node JS,
                  JavaScript, Bootstrap, Tailwind.
                </p>
                <p>Give a call if you need something done.</p>
                <a href={ogoresume} download className="view-project-btn mt-3">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
