import React, { useState } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import './portfolio.css'
// import girl from '../../images/girly.jpg'


const Portfolio = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className='portfolio'>
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
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-1">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn' onClick={handleShow}>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-2">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn'>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-3">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn'>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-4">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn'>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-5">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn'>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="portfolio-container portfolio-container-6">
                                <div class="profile-wrapper">
                                    <div class="profile-card d-flex align-items-center justify-content-center px-4 flex-column">
                                        <h4>Pexel Clone</h4>
                                        <p>A clone of the pexel application. Users can search for images </p>
                                        <button className='view-project-btn'>View Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SmallModal show={show} handleClose={handleClose} />
                </div>
            </div>

        </section>
    );
};

export default Portfolio;
