import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
    

function PaymentDetails () {

    const [details, setDetails] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState(null)

    const url = "/api/suppliers/current";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        setDetails(data);

        const formData = { ...data }

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
        
        setFormData({...formData, ...response_data})
        setDetails({...details, ...response_data});

    }

  return (

    <div>
      {!details ?
        <h2>LOL</h2>
        :
        <div className="userdetails__box">
          <h1 className="userdetails__heading">Payment Details</h1>

          {details &&

            <div>

              {editing ? (
                <Form className="client_form">
                  <Form.Group className="client_form_element client_reg_number_EU">
                    <Form.Label>BANK:</Form.Label>
                    <Form.Control type="text"
                      name="reg_number_EU"
                      onChange={(e) => handleChange(e)}
                      value={formData} />
                  </Form.Group>
                  <Row className="client_contact_row">
                    <Form.Group as={Col} className="client_form_element client_email">
                      <Form.Label>SWIFT:</Form.Label>
                      <Form.Control type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        value={formData.bank_accounts[0].bank_name} />
                    </Form.Group>
                    <Form.Group as={Col} className="client_form_element client_phone">
                      <Form.Label>IBAN:</Form.Label>
                      <Form.Control type="text"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        value={formData} />
                    </Form.Group>
                  </Row>

                  <Row className="client_contact_row">
                    <Form.Group as={Col} className="client_form_element client_email">
                      <Form.Label>Bank code:</Form.Label>
                      <Form.Control type="email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        value={formData} />
                    </Form.Group>
                    <Form.Group as={Col} className="client_form_element client_phone">
                      <Form.Label>Account N.:</Form.Label>
                      <Form.Control type="text"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        value={formData} />
                    </Form.Group>
                  </Row>

                  <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
                    Save
                  </Button>


                </Form>) :
                (
                  <div className="userdetails__container">
                    <span className="userdetails__detail"><strong>BANK: </strong>{details.bank_accounts[0].bank_name}</span>

                    <span className="userdetails__detail"><strong>SWIFT: </strong>{details.bank_accounts[0].swift}</span>

                    <span className="userdetails__detail"><strong>IBAN: </strong>{details.bank_accounts[0].iban}</span>

                    <span className="userdetails__detail"><strong>Bank code: </strong>{details.bank_accounts[0].bank_account_code}</span>
                    <span className="userdetails__detail"><strong>Account N.: </strong>{details.bank_accounts[0].bank_account_number}</span>

                    <span className="userdetails__detail"><strong>Currency: </strong></span>



                    <button type="button" onClick={() => setEditing(true)}>
                      Edit
                    </button>


                  </div>
                )}
            </div>

          }
        </div>
      }
    </div>
  );
}

export default PaymentDetails;