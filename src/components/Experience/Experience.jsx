import React from 'react';
import skillGuy from '../../images/skill.png'
import { FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaVuejs, FaJsSquare, FaGithubAlt, FaNodeJs } from 'react-icons/fa';
const Experience = () => {
  return (
    <section className='experience-section'>
      <div className="container">
        <h5>Skill Experience</h5>
        <div className="my-5">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaHtml5 className='skill-icon html' />
                      <h5>HTML</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaCss3Alt className='skill-icon css' />
                      <h5>CSS</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaJsSquare className='skill-icon js' />
                      <h5>JavaScript</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaBootstrap className='skill-icon bootstrap' />
                      <h5>Bootstrap</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaReact className='skill-icon react' />
                      <h5>React</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6  mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaVuejs className='skill-icon vue' />
                      <h5>Vue</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaGithubAlt className='skill-icon git' />
                      <h5>Git</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="text-center skill-box">
                    <div>
                      <FaNodeJs className='skill-icon nodejs' />
                      <h5>NodeJs</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={skillGuy} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;