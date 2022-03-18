import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const ReactModal = ({title,description,image,rating}) => {
    console.log()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Details
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex align-items-center'>
                    <div className='w-50'>
                        <img src={image} className='w-100' alt="" />
                    </div>
                    <div className='w-50 ms-4'>
                        <p className='m-0'><span className='text-primary'>Product name:</span> {title}</p>
                        <p className='m-0'><span className='text-primary'>Rating:</span> {rating.rate}</p>
                        <p className='m-0'>{description}.</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button className='btn btn-danger' variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
};

export default ReactModal;
