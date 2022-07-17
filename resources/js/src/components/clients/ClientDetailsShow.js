import Button from 'react-bootstrap/Button';

const ClientDetailsShow = ({ clientData, editing, setEditing }) => {

    return (
        <>
            <h3>{clientData.name}</h3>
            <div className="client-details-items">
                <div className="client-details-items item">
                    <p><strong>ICO/REG N.</strong> {clientData.reg_number}</p>
                    <p><strong>DIC/VAT N.</strong> {clientData.reg_number_EU}</p>
                    <p><strong>Address: </strong>{clientData.address[0].postal_code}, {clientData.address[0].city} {clientData.address[0].street_name} {clientData.address[0].house_number}/{clientData.address[0].house_orient} </p>
                </div>
                <div className="client-details-items item">
                    <p><strong>Phone: </strong>{clientData.phone}</p>
                    <p><strong>Email: </strong>{clientData.email}</p>
                </div>
                <div className="client-details-items item">
                    <Button className="button-container" type="button" onClick={() => setEditing(true)}>
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ClientDetailsShow;