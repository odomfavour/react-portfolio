import React, { useState } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import './portfolio.css'
import { projects } from './portfolioData';
// import girl from '../../images/girly.jpg'


const Portfolio = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <section className='portfolio' id="portfolio">
            <div className="container">
                <div className="heading d-flex justify-content-between align-items-baseline mb-5">
                    <div>
                        <span>Portfolio</span>
                        <h4>Creative Portfolio</h4>
                    </div>

                    <div>

                    </div>
                </div>

                <div className="portfolio-display">
                    {/* <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="portfolio-box">
                                <div className="image-box">
                                    <img src={girl} alt="" className='img-fluid' />
                                </div>
                                <div className="portfolio-info">
                                    <div className="d-flex justify-content-between">
                                        <h4>Learn</h4>
                                        <h6>Web</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        {projects.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div className={`portfolio-container portfolio-container-${item.id}`}>
                                    <div class="profile-wrapper">
                                        <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <p className='fw-bold text-success'>{item.stack}</p>
                                            <a href={item.link} target="_blank" rel='noreferrer' className='view-project-btn'>View Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex my-3 justify-content-end">
                        <button className="btn btn-primary">See more</button>
                    </div>
                    <SmallModal show={show} handleClose={handleClose} />
                </div>
            </div>

        </section>
    );
};

export default Portfolio;
