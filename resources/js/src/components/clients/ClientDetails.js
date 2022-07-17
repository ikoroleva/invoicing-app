import { useEffect, useState, Fragment } from "react";
import axios from 'axios';


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ClientDetails = ({ number }) => {

    const [clientData, setClientData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        // reg_number: '',
        reg_number_EU: '',
        address_city: '',
        address_street_name: '',
        address_house_number: '',
        address_house_orient: '',
        address_postal_code: '',
        email: '',
        phone: '',

    })



    //console.log(editing);
    const url = `/api/clients/${number}`;

    const fetchData = async () => {
        //console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0]);
        setClientData(data[0]);
        setDataLoaded(true);
        setFormData({
            name: data[0].name,
            // reg_number: data[0].reg_number,
            reg_number_EU: data[0].reg_number_EU,
            address_city: data[0].address[0].city,
            address_street_name: data[0].address[0].street_name,
            address_house_number: data[0].address[0].house_number,
            address_house_orient: data[0].address[0].house_orient,
            address_postal_code: data[0].address[0].postal_code,
            email: data[0].email,
            phone: data[0].phone
        })
    }

    useEffect(() => {
        fetchData();


    }, [number]);


    useEffect(() => {
        setEditing(false);

    }, [number]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setEditing(false);

        const response = await axios.post(`/api/clients/${number}`, formData);
        const response_data = response.data;
        console.log(response_data);

    }

    return (
        <Fragment>
            {!dataLoaded ?
                <p>Loading...</p>
                :
                <div className="client-details">
                    {clientData &&

                        <Fragment>

                            {editing ? (
                                <Form className="client_form">
                                    <Row className="client_contact_row">
                                        <Form.Group as={Col} className="client_form_element client_name">
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type="text"
                                                name="name"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.name} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_reg_number_EU">
                                            <Form.Label>DIC/VAT N:</Form.Label>
                                            <Form.Control type="text"
                                                name="reg_number_EU"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.reg_number_EU} />
                                        </Form.Group>
                                    </Row>

                                    <Row className="client_contact_row">
                                        <Form.Group as={Col} className="client_form_element client_email">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email"
                                                name="email"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.email} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_phone">
                                            <Form.Label>Phone:</Form.Label>
                                            <Form.Control type="text"
                                                name="phone"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.phone} />
                                        </Form.Group>
                                    </Row>


                                    <strong>Address:  </strong>
                                    <Row className="client_address_row">

                                        <Form.Group as={Col} className="client_form_element client_address_postal_code">
                                            <Form.Label>Postal code:</Form.Label>
                                            <Form.Control type="text"
                                                name="address_postal_code"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.address_postal_code} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_city">
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control type="text"
                                                name="address_city"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.address_city} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_street">
                                            <Form.Label>Street:</Form.Label>
                                            <Form.Control type="text"
                                                name="address_street_name"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.address_street_name} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_house_number">
                                            <Form.Label>House number:</Form.Label>
                                            <Form.Control type="text"
                                                name="address_house_number"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.address_house_number} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="client_form_element client_address_house_orient">
                                            <Form.Label>House orient number:</Form.Label>
                                            <Form.Control type="text"
                                                name="address_house_orient"
                                                onChange={(e) => handleChange(e)}
                                                value={formData.address_house_orient} />
                                        </Form.Group>

                                    </Row>
                                    <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
                                        Save
                                    </Button>
                                    <Button type="button" variant="primary" onClick={() => setEditing(false)}>
                                        Cancel
                                    </Button>


                                </Form>)
                                : (
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
                                )}
                        </Fragment>

                    }
                </div>
            }
        </Fragment>
    );
}

export default ClientDetails;