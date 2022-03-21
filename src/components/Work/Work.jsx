import React from 'react';
import { Nav } from 'react-bootstrap';
import './work.css'

const Work = () => {
    return (
        <section className='work-section'>
            <div className="container">
                <p>Work Experience</p>
                <h5>Places I have worked at</h5>
                <div className="work-experience my-5">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className='mt-4'>
                        <ul>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti architecto et libero earum quam facere consectetur dignissimos, deserunt velit recusandae sequi est saepe repellendus quisquam nobis? Fugit, aperiam consectetur.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti architecto et libero earum quam facere consectetur dignissimos, deserunt velit recusandae sequi est saepe repellendus quisquam nobis? Fugit, aperiam consectetur.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti architecto et libero earum quam facere consectetur dignissimos, deserunt velit recusandae sequi est saepe repellendus quisquam nobis? Fugit, aperiam consectetur.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti architecto et libero earum quam facere consectetur dignissimos, deserunt velit recusandae sequi est saepe repellendus quisquam nobis? Fugit, aperiam consectetur.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti architecto et libero earum quam facere consectetur dignissimos, deserunt velit recusandae sequi est saepe repellendus quisquam nobis? Fugit, aperiam consectetur.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hire-section text-center d-flex justify-content-center align-items-center">
                <h3>I am delivering beautiful digital products for my clients</h3>
            </div>
        </section>
    );
};

export default Work;
