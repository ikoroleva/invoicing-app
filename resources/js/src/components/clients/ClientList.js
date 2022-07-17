import { useEffect, useState } from "react";
import ClientMinInfo from './ClientMinInfo';
import Table from 'react-bootstrap/Table';



const ClientList = ({ query }) => {
    const [clients, setClients] = useState([]);
    const [clientsFiltered, setClientsFiltered] = useState([]);

    const url = `/api/clients/`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setClients(data);
        setClientsFiltered(data);
    }

    useEffect(() => {
        fetchData();

    }, []);


    //console.log(clients.filter(client => client.name.toLowerCase().includes(query)));

    return (
        <div className="clients-favourite" >
            {clients &&
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reg number</th>
                            <th>Invoices count</th>
                            <th>Total sum</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            clients.map((client, i) =>
                                <ClientMinInfo client={client} key={i} />)

                        } */}
                        {query.length !== 0 ?

                            clients.filter(client => client.name.toLowerCase().includes(query)
                                || client.reg_number.toString().toLowerCase().includes(query)).map((client, i) =>
                                    <ClientMinInfo client={client} key={i} />
                                    // <Link to={`/clients/${client.reg_number}`} key={i}>{client.name}</Link>
                                )
                            : clients.map((client, i) =>
                                <ClientMinInfo client={client} key={i} />
                            )
                        }
                    </tbody>
                </Table>
            }
        </div >)
}

export default ClientList;