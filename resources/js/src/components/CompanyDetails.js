import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function CompanyDetails() {
    const [details, setDetails] = useState({});

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
            <div className="userdetails__container">
                <span className="userdetails__detail">
                    <strong>ICO/REG N.:</strong>
                    {details.reg_number}
                </span>
            </div>
        </div>
    );
}

export default CompanyDetails;
