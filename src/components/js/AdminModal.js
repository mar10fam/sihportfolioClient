import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AdminModal = ({ show, handleClose, message }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: "#000000"}}>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "#000000", display: "flex", justifyContent: "space-between" }}>
                {message}
                <span><Button variant="secondary" onClick={handleClose}>Close</Button></span>
            </Modal.Body>
        </Modal> 
    )
};

export default AdminModal;