import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";

const CreateNewInvoice = () => {
    const [values, setValues] = useState({
        supplier_id: "1",
        client_id: "1",
        status: "new",
        currency: "CZK",
        number: "",
        issued_on: "",
        due_date: "",
        form_of_payment: "",
        invoice_description: "",
        unit_cost: "",
        unit_quantity: "",
        additional_notes: "",
    });

    //success message, if any
    const [flashMessage, setFlashMessage] = useState("");

    //state for modal
    const [show, setShow] = useState(true);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        const response = await axios.post("/api/create-invoice", values);
        const response_data = response.data;
        if (response_data) {
            setFlashMessage(response_data);
            setShow(true);
        }
    };

    const closeModal = () => {};

    return (
        <>
            {/* <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {flashMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Here is custom width modal! Ipsum molestiae natus
                        adipisci modi eligendi? Debitis amet quae unde commodi
                        aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci
                        possimus laboriosam. Quibusdam facilis doloribus
                        debitis! Sit quasi quod accusamus eos quod. Ab quos
                        consequuntur eaque quo rem! Mollitia reiciendis porro
                        quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    <Button type="submit" className="mb-2">
                        Submit
                    </Button>
                </Modal.Body>
            </Modal> */}

            <Form onSubmit={handleSubmit}>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
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
                                Here is custom width modal! Ipsum molestiae
                                natus adipisci modi eligendi? Debitis amet quae
                                unde commodi aspernatur enim, consectetur.
                                Cumque deleniti temporibus ipsam atque a dolores
                                quisquam quisquam adipisci possimus laboriosam.
                                Quibusdam facilis doloribus debitis! Sit quasi
                                quod accusamus eos quod. Ab quos consequuntur
                                eaque quo rem! Mollitia reiciendis porro quo
                                magni incidunt dolore amet atque facilis ipsum
                                deleniti rem!
                            </p>
                            <ButtonGroup
                                className="me-2"
                                aria-label="First group"
                            >
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="mb-2"
                                    onClick={() => setShow(false)}
                                >
                                    Edit invoice
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup
                                className="me-2"
                                aria-label="Second group"
                            >
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="mb-2"
                                >
                                    Save invoice
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Modal.Body>
                </Modal>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Invoice number
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name="number"
                            value={values.number}
                            placeholder="Invoice number"
                            onChange={handleChange}
                        />
                    </Col>

                    <Form.Label column lg={2}>
                        Issued on:
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control
                            type="date"
                            className="mb-2"
                            id="inlineFormInput"
                            name="issued_on"
                            value={values.issued_on}
                            min="2022-01-01"
                            max="2022-12-31"
                            onChange={handleChange}
                        />
                    </Col>

                    <Form.Label column lg={2}>
                        Due date:
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control
                            type="date"
                            className="mb-2"
                            id="inlineFormInput"
                            name="due_date"
                            value={values.due_date}
                            min="2022-01-01"
                            max="2022-12-31"
                            onChange={handleChange}
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Select
                            name="form_of_payment"
                            value={values.form_of_payment}
                            onChange={handleChange}
                        >
                            <option>Payment</option>
                            <option>Wire transfer</option>
                            <option>Cash</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Service description
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name="invoice_description"
                            value={values.invoice_description}
                            placeholder="Service description"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Unit cost
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name="unit_cost"
                            value={values.unit_cost}
                            placeholder="Unit cost"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Unit quantity
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            name="unit_quantity"
                            value={values.unit_quantity}
                            placeholder="Unit quantity"
                            onChange={handleChange}
                        />
                    </Col>

                    <Col xs="auto">
                        Total amount: {values.unit_cost * values.unit_quantity}
                        ,- CZK
                    </Col>
                    <Col xs={7}>
                        <Form.Control
                            name="additional_notes"
                            value={values.additional_notes}
                            placeholder="Your notes to be shown on invoice...."
                            onChange={handleChange}
                        />
                    </Col>

                    <br />
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default CreateNewInvoice;
