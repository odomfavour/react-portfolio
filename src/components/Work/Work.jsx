import React from 'react';
import novel from '../../images/books.jpg'
import './work.css'

const Work = () => {
    return (
        <section className='work-section'>
            <div className="container">
                <p>Interests</p>
                <h5 className='mb-5'>When I am  not Coding, I enjoy writing</h5>
                <div className="row">
                    <div className="col-md-5">
                        <div className="book-show mb-5">
                            <img src={novel} alt="" className='img-fluid book-pic' />
                        </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h3>Do you have Interest in Books? Would you love a good read?</h3>
                            <a href="/books" className="btn btn-primary">See Books</a>
                        </div>
                    </div>
                </div>
                {/* <div className="">
                    <div className="resume-row text-white mb-3">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="rb-left">
                                    <h6>Front-end Developer</h6>
                                    <label>Kodehauz | On-site</label>
                                    <p className="mt-1 mb-2">Aug 2020 - Present</p>
                                    <div className="rb-time">Full Time</div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="rb-right">
                                    <h6>About Company</h6>
                                    <p>It is located in Eket Akwa Ibom state. It's vision is to create a flourishing ecosystem powered by</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="hire-section text-center d-flex justify-content-center align-items-center">
                <h3>I am delivering beautiful digital products for my clients</h3>
            </div>
        </section>
    );
};

export default Work;
