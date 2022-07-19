import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ModalCreateInvoice from "./ModalCreateInvoice";
import InvoiceItem from "./InvoiceItem";

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
        additional_notes: "",
        invoice_items: [],
        total: 0,
    });

    //success message, if any
    const [flashMessage, setFlashMessage] = useState("");

    //state for modal
    const [show, setShow] = useState(false);

    //state for new InvoiceItem line
    const [listOfNewLines, setListOfNewLines] = useState([]);

    //state for total
    const [total, setTotal] = useState(0);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleInvoiceChange = async (element) => {
        const isMatch = await values.invoice_items.filter(
            (elem) => elem.id === element.id
        );
        if (isMatch.length) {
            const arry = await values.invoice_items.map((elem) =>
                elem.id === element.id ? element : elem
            );

            return setValues({ ...values, invoice_items: arry });
        } else {
            return setValues({
                ...values,
                invoice_items: [...values.invoice_items, element],
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);

        const response = await axios.post("/api/create-invoice", values);
        // const response = await axios.get("/development-test/invoice", values);

        const response_data = response.data;
        if (response_data) {
            setFlashMessage(response_data);
            function closeModal() {
                setShow(false);
            }
            setTimeout(closeModal, 2500);
        }
    };

    const totalAmount = () => {
        values.invoice_items.map((el, i) => {
            setTotal(total + el.sub_total);
        });
    };

    useEffect(() => {
        totalAmount();
    }, [values.invoice_items]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ModalCreateInvoice
                    show={show}
                    setShow={setShow}
                    flashMessage={flashMessage}
                    handleSubmit={handleSubmit}
                    formData={values}
                />
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

                    <Form.Label column lg={1}>
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

                    <Form.Label column lg={1}>
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
                </Row>
                <Row className="align-items-center">
                    <InvoiceItem
                        values={{ values }}
                        handleChange={handleInvoiceChange}
                        total={total}
                        setTotal={setTotal}
                        id={0}
                    />

                    {listOfNewLines.map((Element, index) => (
                        <Col xs={7} key={index}>
                            <Element
                                values={{ values }}
                                handleChange={handleInvoiceChange}
                                total={total}
                                setTotal={setTotal}
                                id={index + 1}
                            />
                        </Col>
                    ))}
                    <Col xs="auto">
                        <Button
                            variant="secondary"
                            onClick={() =>
                                setListOfNewLines([
                                    ...listOfNewLines,
                                    InvoiceItem,
                                ])
                            }
                        >
                            add new line
                        </Button>
                    </Col>
                </Row>
                <Col xs={7}>
                    <Form.Control
                        name="additional_notes"
                        value={values.additional_notes}
                        placeholder="Your notes to be shown on invoice...."
                        onChange={handleChange}
                    />
                </Col>
                <Col xs="auto">
                    Total: {total}
                    ,- CZK
                </Col>

                <br />
                <Col xs="auto">
                    <Button variant="primary" onClick={() => setShow(true)}>
                        Generate invoice
                    </Button>
                    {/* <Button type="submit">test values</Button>{" "} */}
                </Col>
            </Form>
        </>
    );
};

export default CreateNewInvoice;
