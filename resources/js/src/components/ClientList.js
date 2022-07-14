import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


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
                <div>
                    {clients.map((client, i) =>
                        <Link to={`/clients/${client.reg_number}`} key={i}>{client.name}</Link>)
                    }

                </div>
            }
        </div >)
}

export default ClientList;