import React from 'react';
import './about.css'
import ogo from '../../images/ogo1.png'

const About = () => {
    return (
        <div id="about" className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image-box text-center">
                            <img src={ogo} alt="" className='img-fluid dev-small-image' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="px-4">
                            <p>About Me</p>
                            <h4>Creative Web Developer based in Nigeria</h4>
                            <div className='my-2'>
                                <div className="row ">
                                    <div className="col-md-4 mb-3">
                                        <div className='about-card'>
                                            <div>
                                            <h6 className='mb-0'>Experience</h6>
                                            <h5 className='mb-0 fw-bold'><span className='count'>4</span> years</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className='about-card'>
                                            <div>
                                                <h6 className='mb-0'>Completed</h6>
                                                <h5 className='mb-0 fw-bold'><span className='count'>8</span> Projects</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className='about-card'>
                                            <div>
                                            <h6 className='mb-0'>Support</h6>
                                            <h5 className='mb-0 fw-bold'>Online <span className='count'>24/7</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                I'm Creative Web Developer, and I'm very passionate and dedicated to my work. With over 3 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                                <p>I code and create web applications for amazing people around the world. I work with Vue, Nuxt, Graphql, Node JS, JavaScript, Bootstrap, Tailwind.</p>
                                <p>Give a call if you need something done.</p>
                            <button className="view-project-btn mt-3">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
