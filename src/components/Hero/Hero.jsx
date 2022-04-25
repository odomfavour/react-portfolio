import React from 'react';
import './hero.css'
import ogo from '../../images/ogo-new.png'

const Hero = () => {
    return (
        <section id="home">
            <div className="">
                <div className="d-flex flex-md-row flex-column">
                    <div className="col-md-6 col-12 dev-name">
                        <div className="d-flex justify-content-center align-items-center dev-info">
                            <div>
                                <h1 className='text-uppercase'><span>Ogochukwu</span> Odom</h1>
                                <p>A web developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 dev-pic-section">
                        <div className="developer-background pt-5 pt-lg-0">
                            <img src={ogo} alt="the developer" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
