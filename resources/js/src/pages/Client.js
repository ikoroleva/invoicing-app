import ClientDetails from '../components/clients/ClientDetails';
import { useParams } from "react-router-dom";
import ClientInvoicesList from '../components/clients/ClientInvoicesList';
import Button from 'react-bootstrap/Button';
import ClientTotalInvoicesValue from "../components/clients/ClientTotalInvoicesValue";
import ClientMonthInvoicesValue from '../components/clients/ClientMonthInvoicesValue';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Client = () => {
    const params = useParams();

    //console.log(params);

    const [clientInvoicesData, setClientInvoicesData] = useState([]);

    const url = `/api/clients/${params.number}/invoices`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //    console.log(data);
        setClientInvoicesData(data);
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div className="action-page">
            <Button variant="primary"><Link to={`/create-invoice/${params.number}`}
            // clientData={clientData}
            >Create new invoice</Link>
            </Button>
            <br />
            <br />
            <div className="sum-container">
                <ClientTotalInvoicesValue clientInvoicesData={clientInvoicesData} />
                <ClientMonthInvoicesValue clientInvoicesData={clientInvoicesData} />
            </div>
            <ClientDetails number={params.number} />
            <br />
            <br />
            <ClientInvoicesList clientInvoicesData={clientInvoicesData} setClientInvoicesData={setClientInvoicesData} />
        </div>
    );
};

export default Client;
