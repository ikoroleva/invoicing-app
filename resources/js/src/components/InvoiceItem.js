import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const InvoiceItem = ({ values, handleChange, id }) => {
    // { invoice_description: "", unit_cost: "", unit_quantity: "" },

    const [invoiceData, setInvoiceData] = useState({
        invoice_description: "",
        unit_cost: "",
        unit_quantity: "",
        id,
    });

    useEffect(() => {
        const value = {
            invoice_description: null,
            unit_cost: null,
            unit_quantity: null,
            id,
        };
        setInvoiceData(value);
    }, []);

    const handleChangeInput = (e) => {
        const newValue = {
            ...invoiceData,
            [e.target.name]: e.target.value,
        };

        setInvoiceData(newValue);

        handleChange(newValue);
    };

    return (
        <>
            <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Service description
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    name="invoice_description"
                    value={invoiceData?.invoice_description || ""}
                    placeholder="Service description"
                    onChange={(e) => handleChangeInput(e)}
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
                    value={invoiceData?.unit_cost || ""}
                    placeholder="Unit cost"
                    onChange={(e) => handleChangeInput(e)}
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
                    value={invoiceData?.unit_quantity || ""}
                    placeholder="Unit quantity"
                    onChange={(e) => handleChangeInput(e)}
                />
            </Col>
        </>
    );
};
export default InvoiceItem;
