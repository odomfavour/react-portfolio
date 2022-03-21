import React from 'react'
import { Modal } from 'react-bootstrap'
import enquire from '../../images/question-mark.jpg'

const SmallModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={enquire} alt="" className='img-fluid' />
      </Modal.Body>
    </Modal>
  )
}

export default SmallModal