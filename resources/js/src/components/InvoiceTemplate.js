import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InvoiceTemplate = () => {
    const [invoiceData, setInvoiceData] = useState([]);
    //Client state
    const [clientIco, setClientIco] = useState("");
    const [clientData, setClientData] = useState("");

    //Supplier state
    const [supplierIco, setSupplierIco] = useState("");
    const [supplierData, setSupplierData] = useState("");

    //data loading states
    const [dataLoaded, setDataLoaded] = useState(false);
    const [clientLoaded, setClientLoaded] = useState(false);
    const [supplierLoaded, setSupplierLoaded] = useState(false);

    const { invoice_number } = useParams();
    const url = `http://www.invoicing-app.test/api/invoices/${invoice_number}`;

    const fetchInvoice = async () => {
        const response = await axios.get(url);
        console.log(response.data[0]);
        setInvoiceData(response.data[0]);
        setClientIco(response.data[0].client.reg_number);
        setSupplierIco(response.data[0].supplier.reg_number);

        setDataLoaded(true);
    };

    const fetchClient = async () => {
        const response = await axios.get(`/api/clients/${clientIco}`);
        setClientData(response.data[0]);
        console.log(response.data[0]);
        setClientLoaded(true);
    };

    const fetchSupplier = async () => {
        const response = await axios.get(`/api/suppliers/${supplierIco}`);
        setSupplierData(response.data[0]);
        console.log(response.data[0]);
        setSupplierLoaded(true);
    };

    useEffect(() => {
        fetchInvoice();
    }, [invoice_number]);

    useEffect(() => {
        fetchClient();
        fetchSupplier();
    }, [dataLoaded]);

    return (
        <>
            {!dataLoaded || !clientLoaded || !supplierLoaded ? (
                <p>Loading...</p>
            ) : (
                <div className="container_invoice">
                    <h1>Invoice template</h1>
                    <div className="invoice__header">
                        <div className="invoice__header_img">
                            <img src="../images/logo.svg" alt="logo" />
                        </div>

                        <div className="invoice__header_data">
                            <p>Invoice # {invoiceData.number}</p>
                            <p>Issued at: {invoiceData.issued_on}</p>
                            <p>Due date: {invoiceData.due_date}</p>
                        </div>
                    </div>
                    <div className="seperator_invoice"></div>
                    <div className="invoice__counterparts">
                        <div className="invoice__counterparts_supplier">
                            <p>
                                <b>
                                    Supplier name: {invoiceData.supplier.name}
                                </b>
                            </p>
                            <p>
                                {" "}
                                {supplierData.address.street_name}{" "}
                                {supplierData.address.house_number} /
                                {supplierData.address.house_orient}
                            </p>
                            <p>
                                {" "}
                                {supplierData.address.postal_code}{" "}
                                {supplierData.address.city}
                            </p>
                            <p>Reg.#: {invoiceData.supplier.reg_number} </p>
                            <p>
                                Registred at:{" "}
                                {invoiceData.supplier.reg_type_court}, file{" "}
                                {invoiceData.supplier.reg_type_file}
                            </p>
                        </div>
                        <div className="invoice__counterparts_client">
                            <p>
                                <b>Bill to: {invoiceData.client.name}</b>
                            </p>
                            <p>
                                {clientData.street_name}{" "}
                                {clientData.house_number} /{" "}
                                {clientData.house_orient}
                            </p>
                            <p>
                                {clientData.postal_code} {clientData.city}
                            </p>
                            <p>Reg.#: {invoiceData.client.reg_number} </p>
                            <p>VAT.#: {invoiceData.client.reg_number_EU} </p>
                            <p>
                                Registred at:{" "}
                                {invoiceData.client.reg_type_court}, file{" "}
                                {invoiceData.client.reg_type_file}
                            </p>
                        </div>
                    </div>
                    <div className="seperator_invoice"></div>
                    {invoiceData.form_of_payment === "Cash" ? (
                        <div className="invoice__payment_cash">
                            <p>
                                <b>Payment Method:</b> Cash
                            </p>
                        </div>
                    ) : (
                        <div className="invoice__payment_wire">
                            <p>
                                <b>Payment Method:</b> Wire Transfer
                            </p>

                            <Table
                                striped
                                bordered
                                hover
                                className="bank_details"
                            >
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
                                        <td>
                                            {" "}
                                            {
                                                supplierData.bank_name[0]
                                                    .bank_name
                                            }
                                        </td>
                                        <td>
                                            {" "}
                                            {
                                                supplierData.bank_name[0]
                                                    .bank_account_prefix
                                            }{" "}
                                            -{" "}
                                            {
                                                supplierData.bank_name[0]
                                                    .bank_account_number
                                            }
                                        </td>
                                        <td>
                                            {" "}
                                            {
                                                supplierData.bank_name[0]
                                                    .bank_account_code
                                            }
                                        </td>
                                        <td>
                                            {" "}
                                            {supplierData.bank_name[0].iban}
                                        </td>
                                        <td>
                                            {" "}
                                            {supplierData.bank_name[0].swift}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}

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
                            {invoiceData.invoice_items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.invoice_description}</td>
                                    <td>{item.unit_cost}</td>
                                    <td>{item.unit_quantity}</td>
                                    <td>
                                        {item.unit_cost * item.unit_quantity},-
                                        CZK
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="invoice__total">
                        <p>
                            <b>Total:</b>
                        </p>
                        <p>{invoiceData.total_amount},- CZK</p>
                    </div>
                </div>
            )}
        </>
    );
};
export default InvoiceTemplate;
