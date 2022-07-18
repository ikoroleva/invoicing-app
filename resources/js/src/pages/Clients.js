import ClientSearchBar from '../components/clients/ClientSearchBar';
import ClientSearchResults from '../components/clients/ClientSearchResults';
import { useEffect, useState } from "react";
import ClientList from '../components/clients/ClientList';
import Button from 'react-bootstrap/Button';
import ModalGetClientFromAres from '../components/clients/ModalGetClientFromAres';
import ClientDetailsEdit from '../components/clients/ClientDetailsEdit';



const Clients = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [show, setShow] = useState(false);
    const [clientData, setClientData] = useState(null);
    const [showEdit, setShowEdit] = useState(false);




    return (
        <div className='clients-container'>
            <Button variant="primary" onClick={() => setShow(true)}>Add new client</Button>
            <br />

            <br />
            <ModalGetClientFromAres
                show={show}
                setShow={setShow}
                setClientData={setClientData}
                setShowEdit={setShowEdit}
            // flashMessage={flashMessage}
            // handleSubmit={handleSubmit}
            />
            {clientData &&
                <div className={`client-details ${!showEdit && "hidden"}`}>
                    <ClientDetailsEdit clientData={clientData} setEditing={(e) => { }} setShowEdit={setShowEdit} />
                    <br />
                </div>
            }

            <ClientSearchBar
                searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {
                // <ClientSearchResults query={searchQuery} />
                // : 
                <ClientList query={searchQuery} />
            }


        </div>
    );
}

export default Clients;