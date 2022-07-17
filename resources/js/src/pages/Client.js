import ClientDetails from '../components/clients/ClientDetails';
import { useParams } from "react-router-dom";
import ClientInvoicesList from '../components/clients/ClientInvoicesList';
import Button from 'react-bootstrap/Button';


const Client = () => {

    const params = useParams();

    console.log(params);

    return (
        <div className='client-container'>
            <Button variant="primary">Create new invoice</Button>
            <ClientDetails number={params.number} />
            <ClientInvoicesList number={params.number} />
        </div>
    );
}

export default Client;