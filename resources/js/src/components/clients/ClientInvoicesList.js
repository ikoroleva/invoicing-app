
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const ClientInvoicesList = ({ clientInvoicesData, setClientInvoicesData }) => {
    // const [clientInvoicesData, setClientInvoicesData] = useState([]);

    // const url = `/api/clients/${number}/invoices`;

    // const fetchData = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setClientInvoicesData(data);
    // }

    // useEffect(() => {
    //     fetchData();

    // }, []);


    return (
        <div className="clients-invoices" >
            {clientInvoicesData &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Issued on</th>
                            <th>Due date</th>
                            <th>Status</th>
                            <th>More options</th>
                        </tr>
                    </thead>
                    <tbody>

                        {clientInvoicesData.map((invoice, i) =>
                            <tr key={i}>
                                <td>{invoice.number}</td>
                                <td>{invoice.total_amount} CZK</td>
                                <td>{invoice.issued_on}</td>
                                <td>{invoice.due_date}</td>
                                <td>{invoice.status}</td>

                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            Select action
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Show</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Download</Dropdown.Item>
                                            {/* <Dropdown.Item href="#/action-3">Send via EMAIL</Dropdown.Item> */}
                                            <Dropdown.Item href="#/action-3">Set PAID status</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>

                            </tr>
                        )
                        }
                    </tbody>
                </Table>
            }
        </div >)
}

export default ClientInvoicesList;