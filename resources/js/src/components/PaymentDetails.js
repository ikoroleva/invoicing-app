import { useEffect, useState } from "react";
import React from 'react';

function PaymentDetails() {

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
            <div className="userdetails__heading">Payment details</div>

            { !details ?
            <h2>LOL</h2>
            :
            <div className="userdetails__container">
                <span className="userdetails__detail"><strong>BANK: </strong>{details.bank_accounts[0].bank_name}</span>

                <span className="userdetails__detail"><strong>SWIFT: </strong>{details.bank_accounts[0].swift}</span>

                <span className="userdetails__detail"><strong>IBAN: </strong>{details.bank_accounts[0].iban}</span>

                <span className="userdetails__detail"><strong>Bank code: </strong>{details.bank_accounts[0].bank_account_code}</span>

                <span className="userdetails__detail"><strong>Account N.: </strong>{details.bank_accounts[0].bank_account_number}</span>

                <span className="userdetails__detail"><strong>Currency: </strong></span>


            </div>
            }

        </div>
    )
}

export default PaymentDetails;