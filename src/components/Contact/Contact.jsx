import React from 'react'
// import LargeModal from '../LargeModal/LargeModal'
import enquire from '../../images/webp/question-mark.webp'
import {FaMapMarkerAlt, FaEnvelope, FaMobileAlt} from 'react-icons/fa'
import './contact.css'
const Contact = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <section className="enquiry" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 mb-3">
            <div className="contact-form bg-white p-3">
              <h4 className='my-3'>Contact Me</h4>
              <div className="row">
                <div className="col-lg-8 col-12 mb-3">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label for="firstName" class="form-label">First Name</label>
                          <input type="text" class="form-control" id="firstName" aria-describedby="firstName" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label for="lastName" class="form-label">Last Name</label>
                          <input type="text" class="form-control" id="lastName" aria-describedby="lastName" />
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="subject" class="form-label">Subject</label>
                      <input type="text" class="form-control" id="subject" aria-describedby="subject" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label for="comment" class="form-label">Comment</label>
                      <textarea name="" id="" className='form-control'></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div className="col-md-4 d-none d-lg-block mb-3">
                  <img src={enquire} alt="" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-lg-block d-md-none mb-3"></div>
          <div className="col-lg-4 col-md-6 mb-3">
            <h3 className='my-3'> Get In touch</h3>
            <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
            <div className="contact-options">
              <div className="d-flex align-items-center contact-option mb-3">
                <div className="icon me-2">
                  <FaMapMarkerAlt/>
                </div>
                <span className="contact-text">
                  18 Idua road, Eket<br></br>
                  Akwa Ibom
                </span>
              </div>
              <div className="d-flex align-items-center contact-option mb-3">
                <div className="icon me-2">
                  <FaEnvelope/>
                </div>
                <span className="contact-text">
                  ogochukwuodom@gmail.com<br></br>
                </span>
              </div>
              <div className="d-flex align-items-center contact-option">
                <div className="icon me-2">
                  <FaMobileAlt/>
                </div>
                <span className="contact-text">
                  08067488682
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <LargeModal show={show} handleClose={handleClose} /> */}
      </div>
    </section>
  )
}

export default Contact