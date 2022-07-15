import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import ClientDetails from './ClientDetails';

const ClientSearch = () => {

    const [searchNum, setSearchNum] = useState('');
    const [clientData, setClientData] = useState(null);

    const fetchClient = async (url) => {
        //console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0]);
        setClientData(data[0]);
    }

    return (
        <div className="clients-page-container">
            <Form className="client-search-form">
                <Form.Group className="client-search-form-input">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="text" placeholder="enter client number" onChange={(e) => setSearchNum(e.target.value)} />
                </Form.Group>
                {/* <Button variant="primary" onClick={() => fetchClient(`/api/clients/${searchNum}`)}>
                    Search
                </Button> */}

            </Form>
            {clientData ?
                <ClientDetails number={searchNum} />
                :
                "No results"
            }
        </div>
    );
}

export default ClientSearch;