import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

export default function InvoicesList() {

    //state to store all  invoices into - for curently logged in user
    const [invoices, setInvoices] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const url = `api/invoices/suppliers/allinvoices?offset=${offset}`;


    //currently logged in user
    const fetchData = async() => {
    const resp = await fetch(url);
    const data = await resp.json();
    setInvoices(data.data);
    setTotalCount(data.totalCount);    
    console.log(data)
    };

    //use effect hook to fetch the data
    useEffect(() => {
    fetchData();
  },[offset]);


    

  return(  
    <div className="table__container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Amount</th>
                        <th>Issued on</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>More options</th>
                    </tr>
                </thead>
                <tbody>
        {invoices.map((invoice, index) => (
                    <tr key={index}>
                        <td>{invoice.id}</td>
                        <td>{invoice.client.name}</td>
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
      ))}
                
                 </tbody>
            </Table>

            {/* showing the current results/all results number */}
            <p className="result__count">Results: {offset + 1  }-{offset + invoices.length}/{totalCount}</p>
            
            {/* buttons for setting offsets */}
             <button 
                disabled={offset === 0} 
                onClick={() => setOffset(offset === 0 ? offset : offset - 3)}>
                    Previous results
            </button>
                <button 
                disabled={offset > (Object.keys(invoices).length)}
                onClick={() => setOffset(offset + 3)}>Next results</button>
</div>
  )
}