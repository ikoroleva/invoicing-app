import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {

    return (
        <div className="contact-container">
            <h2>Contact us</h2>
            <p>We love questions and feedback – and we're always happy to help! Here are some ways to contact us.</p>

            <Form className='contact-form'>
                <Form.Text className="contact-form-text">
                    <h3>Send us a message</h3>
                    <p>Send us a message and we'll respond within 24 hours.</p>
                </Form.Text>
                <Row className="contact-form-row">
                    <Form.Group as={Col} className="contact-form-fullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name here" />
                    </Form.Group>

                    <Form.Group as={Col} className="contact-form-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email here" />
                    </Form.Group>
                </Row>
                <Row className="contact-form-row">
                    <Form.Group as={Col} className="contact-form-phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group as={Col} className="contact-form-organisation">
                        <Form.Label>Organisation</Form.Label>
                        <Form.Control type="email" placeholder="Organisation name" />
                    </Form.Group>
                </Row>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <div className='contact-info'>
                <h3>Contact information</h3>
                <p>Email: contact-us@company.com</p>
                <p>Phone: +420 000 000 001</p>
            </div>
        </div>
    );
}

export default Contact;