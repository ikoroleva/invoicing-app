import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

const ModalGetClientFromAres = ({ show, setShow }) => {


    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <p>Loading from ARES</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="client-search-ares-modal">

                        <Form.Control type="text" placeholder="Enter client number" />
                        <br />
                        <Button variant="primary" onClick={() => setShow(false)}>Load client</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalGetClientFromAres;
