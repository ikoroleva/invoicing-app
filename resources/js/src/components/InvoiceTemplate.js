import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const InvoiceTemplate = () => {
    return (
        <>
            {" "}
            <div className="container_invoice">
                <h1>Invoice template</h1>
                <div className="invoice__header">
                    <div className="invoice__header_img">
                        <img src="https://via.placeholder.com/100x100" />
                    </div>

                    <div className="invoice__header_data">
                        <p>Invoice #</p>
                        <p>Issued at:</p>
                        <p>Due date:</p>
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
