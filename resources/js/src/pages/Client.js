import ClientDetails from '../components/ClientDetails';
import { useParams } from "react-router-dom";
import ClientSearch from '../components/ClientSearch';



const Client = () => {

    const params = useParams();

    console.log(params);

    return (
        <div className='client-container'>
            <ClientDetails number={params.number} />
        </div>
    );
}

export default Client;