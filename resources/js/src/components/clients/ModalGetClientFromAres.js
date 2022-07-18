import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import getAres from "../../actions/getAres";

const ModalGetClientFromAres = ({ show, setShow, setClientData, setShowEdit }) => {

    const [number, setNumber] = useState('');
    const handleClick = async (e) => {

        console.log(number);

        const aresData = await getAres(number);
        setClientData(aresData);

        console.log(aresData);
        setShow(false);
        setShowEdit(true);
    }



    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>Loading from ARES</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="client-search-ares-modal">

                        <Form.Control type="text" placeholder="Enter client number" onChange={(e) => setNumber(e.target.value)} />
                        <br />
                        <Button variant="primary" onClick={(e) => handleClick(e)}>Load client</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalGetClientFromAres;
