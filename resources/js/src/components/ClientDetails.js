import { useEffect, useState } from "react";
import axios from 'axios';

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
    }, [editing]);





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
        <div>
            {!dataLoaded ?
                <p>Loading...</p>
                :
                <div className="client-details">
                    {clientData &&

                        <div>

                            {editing ? (
                                <form>
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.name}
                                    />
                                    <br />
                                    {/* <label htmlFor="reg_number">ICO/REG N: </label>
                                    <input
                                        name="reg_number"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.reg_number}
                                    />
                                    <br /> */}
                                    <label htmlFor="reg_number_EU">DIC/VAT N: </label>
                                    <input
                                        name="reg_number_EU"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.reg_number_EU}
                                    />
                                    <br />
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.email}
                                    />
                                    <br />
                                    <label htmlFor="phone">Phone: </label>
                                    <input
                                        name="phone"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.phone}
                                    />
                                    <br />
                                    <strong>Address  </strong>
                                    <br />
                                    <label htmlFor="address_city">City: </label>
                                    <input
                                        name="address_city"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.address_city}
                                    />
                                    <br />
                                    <label htmlFor="address_street_name">Street: </label>
                                    <input
                                        name="address_street_name"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.address_street_name}
                                    />
                                    <br />
                                    <label htmlFor="address_house_number">House number: </label>
                                    <input
                                        name="address_house_number"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.address_house_number}
                                    />
                                    <br />
                                    <label htmlFor="address_house_orient">House orient number: </label>
                                    <input
                                        name="address_house_orient"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.address_house_orient}
                                    />
                                    <br />
                                    <label htmlFor="address_postal_code">Postal code: </label>
                                    <input
                                        name="address_postal_code"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.address_postal_code}
                                    />
                                    <br />
                                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                                        Save
                                    </button>


                                </form>)
                                : (
                                    <>
                                        <h3>{clientData.name}</h3>
                                        <p><strong>ICO/REG N.</strong> {clientData.reg_number}</p>
                                        <p><strong>DIC/VAT N.</strong> {clientData.reg_number_EU}</p>
                                        <p><strong>Phone: </strong>{clientData.phone}</p>
                                        <p><strong>Email: </strong>{clientData.email}</p>
                                        <p><strong>Address: </strong>{clientData.address[0].postal_code}, {clientData.address[0].city} {clientData.address[0].street_name} {clientData.address[0].house_number}/{clientData.address[0].house_orient} </p>

                                        <button type="button" onClick={() => setEditing(true)}>
                                            Edit
                                        </button>
                                    </>
                                )}
                        </div>

                    }
                </div>
            }
        </div>
    );
}

export default ClientDetails;