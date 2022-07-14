import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const ClientList = () => {
    const [clients, setClients] = useState([]);

    const url = `/api/clients/`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setClients(data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="result-container">

            {clients &&
                <ListGroup>
                    {clients.map((client, i) =>
                        <ListGroup.Item><Link to={`/clients/${client.reg_number}`} key={i}>{client.name}</Link></ListGroup.Item>)
                    }

                </ListGroup>
            }
        </div >)
}

export default ClientList;