import React, {useState} from 'react'
import LargeModal from '../LargeModal/LargeModal'
import './contact.css'
const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="enquiry" id="contact">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center enquire">
          <div>
            <h3>Work with me</h3>
            <button className="btn btn-warning" onClick={handleShow}>Make Enquiry</button>
          </div>
        </div>
        <LargeModal show={show} handleClose={handleClose} />
      </div>
    </section>
  )
}

export default Contact