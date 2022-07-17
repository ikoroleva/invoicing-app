import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InvoiceTemplate = () => {
    const [invoiceData, setInvoiceData] = useState(null);
    const { invoice_number } = useParams();
    const url = `http://www.invoicing-app.test/api/invoices/${invoice_number}`;
    const fetchInvoice = async () => {
        const response = await axios.get(url);

        setInvoiceData(response.data[0]);
        console.log(response.data[0]);
    };

    useEffect(() => {
        fetchInvoice();
    }, [invoice_number]);

    return (
        <>
            {" "}
            <div className="container_invoice">
                <h1>Invoice template</h1>
                <div className="invoice__header">
                    <div className="invoice__header_img">
                        <img src="../images/logo.svg" alt="logo" />
                    </div>

                    <div className="invoice__header_data">
                        <p>Invoice #</p>
                        <p>Issued at:</p>
                        <p>Due date: </p>
                    </div>
                </div>
                <div className="seperator_invoice"></div>
                <div className="invoice__counterparts">
                    <div className="invoice__counterparts_supplier">
                        <p>
                            <b>Supplier name:</b>
                        </p>
                        <p>Street name:</p>
                        <p>City name</p>
                        <p>ICO number #:</p>
                    </div>
                    <div className="invoice__counterparts_client">
                        <p>
                            <b>Client name:</b>
                        </p>
                        <p>Street name</p>
                        <p>City name</p>
                        <p>ICO number #:</p>
                    </div>
                </div>
                <div className="seperator_invoice"></div>
                <div className="invoice__payment_cash">
                    <p>
                        <b>Payment Method:</b> Cash
                    </p>
                </div>
                <div className="invoice__payment_wire">
                    <p>
                        <b>Payment Method:</b> Wire Transfer
                    </p>

                    <Table striped bordered hover className="bank_details">
                        <thead>
                            <tr>
                                <th>Bank name</th>
                                <th>Account number</th>
                                <th>Bank code</th>
                                <th>SWIFT</th>
                                <th>IBAN (BIC)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="seperator_invoice"></div>

                <Table striped bordered hover className="invoice__body">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service name</th>
                            <th>Unit price</th>
                            <th>Unit quantity</th>
                            <th>Sub-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="invoice__total">
                    <p>
                        <b>Total:</b>
                    </p>
                    <p>100500,- CZK</p>
                </div>
            </div>
        </>
    );
};
export default InvoiceTemplate;
