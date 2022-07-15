import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
    

function CompanyDetails() {

    const [details, setDetails] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({})

    const url = "/api/suppliers/current";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        setDetails(data);

        const formData = { ...data}
        formData.address_city = data.addresses[0].city
        formData.address_street_name = data.addresses[0].street_name
        formData.address_house_number = data.addresses[0].house_number
        formData.address_house_orient = data.addresses[0].house_orient
        formData.address_postal_code = data.addresses[0].postal_code

        setFormData(formData)
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setEditing(false);

        const response = await axios.post(`/api/suppliers/current`, formData);
        const response_data = response.data;
        console.log(response_data);

    }

    return (

        <div>
            {!details ?
                <h2>LOL</h2>
                :
                <div className="userdetails__box">
                    <h1 className="userdetails__heading">Company Details</h1>

                    {details &&

                        <div>

                            {editing ? (
                                <form>
                                    <label htmlFor="reg_number">ICO/REG N: </label>
                                    <input
                                        name="reg_number"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.reg_number}
                                    />
                                    <br />

                                    <label htmlFor="reg_number_EU">DIC/VAT N: </label>
                                    <input
                                        name="reg_number_EU"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.reg_number_EU}
                                    />
                                    <br />

                                    <label htmlFor="phone">Phone: </label>
                                    <input
                                        name="phone"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.phone}
                                    />

                                    <br />

                                    <label htmlFor="email">Email: </label>
                                    <input
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.email}
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


                                </form>
                            ) :
                                (
                                    <div className="userdetails__container">
                                        <span className="userdetails__detail"><strong>ICO/REG N.: </strong>{details.reg_number}</span>

                                        <span className="userdetails__detail"><strong>DIC/REG N.: </strong>{details.reg_number_EU}</span>

                                        <span className="userdetails__detail"><strong>Phone: </strong>{details.phone}</span>

                                        <span className="userdetails__detail"><strong>E-mail: </strong>{details.email}</span>

                                        <div className='userdetails__address'>

                                            <h3 className='userdetails__address_heading'>Address</h3>

                                            <div className='serdetails__address_container'>

                                                <span className="userdetails__detail">{details.addresses[0].street_name}</span><br />

                                                <span className="userdetails__detail">{details.addresses[0].house_number}/{details.addresses[0].house_orient}</span><br />

                                                <span className="userdetails__detail">{details.addresses[0].postal_code} {details.addresses[0].city}</span><br />

                                            </div>
                                            <button type="button" onClick={() => setEditing(true)}>
                                                Edit
                                            </button>
                                        </div>

                                    </div>
                                )}
                        </div>

                    }
                </div>
            }
        </div>
    );
}

export default CompanyDetails;
