import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

const ModalCreateInvoice = ({ show, setShow, flashMessage, handleSubmit }) => {
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
                        {flashMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            Here is custom width modal! Ipsum molestiae natus
                            adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque
                            deleniti temporibus ipsam atque a dolores quisquam
                            quisquam adipisci possimus laboriosam. Quibusdam
                            facilis doloribus debitis! Sit quasi quod accusamus
                            eos quod. Ab quos consequuntur eaque quo rem!
                            Mollitia reiciendis porro quo magni incidunt dolore
                            amet atque facilis ipsum deleniti rem!
                        </p>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button
                                variant="primary"
                                size="sm"
                                className="mb-2"
                                onClick={() => setShow(false)}
                            >
                                Edit invoice
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button
                                type="submit"
                                size="sm"
                                className="mb-2"
                                onClick={() => handleSubmit()}
                            >
                                Save invoice
                            </Button>
                        </ButtonGroup>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalCreateInvoice;
