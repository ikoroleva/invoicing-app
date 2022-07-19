import ClientDetails from '../components/clients/ClientDetails';
import { useParams } from "react-router-dom";
import ClientInvoicesList from '../components/clients/ClientInvoicesList';
import Button from 'react-bootstrap/Button';
import ClientTotalInvoicesValue from "../components/clients/ClientTotalInvoicesValue";
import ClientMonthInvoicesValue from '../components/clients/ClientMonthInvoicesValue';
import { Link } from 'react-router-dom';


const Client = () => {
    const params = useParams();

    console.log(params);

    return (
        <div className="action-page">
            <Button variant="primary"><Link to={`/create-invoice/${params.number}`}
            // clientData={clientData}
            >Create new invoice</Link>
            </Button>
            <br />
            <br />
            <div className="sum-container">
                <ClientTotalInvoicesValue />
                <ClientMonthInvoicesValue />
            </div>
            <ClientDetails number={params.number} />
            <br />
            <br />
            <ClientInvoicesList number={params.number} />
        </div>
    );
};

export default Client;
