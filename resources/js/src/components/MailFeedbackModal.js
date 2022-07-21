import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const MailFeedbackModal = ({ show, setShow, respond }) => {
    const handleClose = () => {
        setShow(false);
        navigate("/dashboard");
    };
    const navigate = useNavigate();
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{respond}</Modal.Title>
                </Modal.Header>
                <Modal.Body>We'll get back to you asap!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Noted
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MailFeedbackModal;
