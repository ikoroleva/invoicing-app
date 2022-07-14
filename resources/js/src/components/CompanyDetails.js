import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function CompanyDetails() {

    const [details, setDetails] = useState(null);

    const url = "/api/suppliers/current";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        setDetails(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="userdetails__box">
            <div className="userdetails__heading">Company Details</div>

            { !details ?
            <h2>LOL</h2>
            :
            <div className="userdetails__container">
                <span className="userdetails__detail"><strong>ICO/REG N.: </strong>{details.reg_number}</span>

                <span className="userdetails__detail"><strong>DIC/REG N.: </strong>{details.reg_number_EU}</span>

                <span className="userdetails__detail"><strong>Phone: </strong>{details.phone}</span>

                <span className="userdetails__detail"><strong>E-mail: </strong>{details.email}</span>

            <div className='userdetails__address'>

                <h3 className='userdetails__address_heading'>Address</h3>

            <div className='serdetails__address_container'>

                <span className="userdetails__detail">{details.addresses[0].street_name}</span><br/>

                <span className="userdetails__detail">{details.addresses[0].house_number}/{details.addresses[0].house_orient}</span><br/>

                <span className="userdetails__detail">{details.addresses[0].postal_code} {details.addresses[0].city}</span><br/>
                
            </div>

            </div>

            </div>
            }

        </div>
    );
}

export default CompanyDetails;
