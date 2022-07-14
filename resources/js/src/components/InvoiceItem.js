import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const InvoiceItem = ({ values, handleChange }) => {
    return (
        <>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Service description
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    name="invoice_items[]"
                    value={values.invoice_items}
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
                    name="invoice_items[]"
                    value={values.invoice_items}
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
                    name="invoice_items[]"
                    value={values.invoice_items}
                    placeholder="Unit quantity"
                    onChange={handleChange}
                />
            </Col>
        </>
    );
};
export default InvoiceItem;
