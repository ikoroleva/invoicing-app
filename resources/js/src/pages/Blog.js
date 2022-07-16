import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Blog = () => {
    function rand() {
        return Math.floor(Math.random() * 1000) + 100;
    }

    // document.querySelectorAll(".post:not(.featured)").forEach((post) => {
    //     post.querySelector(
    //         ".image"
    //     ).style.backgroundImage = `url("https://unsplash.it/300/300/?image=${rand(
    //         100,
    //         1000
    //     )}")`;
    // });
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="title">
                        <h1>Useful Blog page</h1>
                        <div className="seperator-title"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                        <div className="item-in">
                            <img
                                variant="top"
                                src={`https://unsplash.it/600/300/?image=${rand()}`}
                                className="image-featured"
                            />
                            <h4>Some Kind of featured title</h4>
                            <div className="seperator"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Modi expedita eveniet
                                consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Modi expedita
                                eveniet consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem!
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                        <div className="item-in">
                            <img
                                variant="top"
                                src={`https://unsplash.it/500/300/?image=${rand()}`}
                                className="image-featured"
                            />
                            <h4>Some Kind of Title</h4>
                            <div className="seperator"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Modi expedita eveniet
                                consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem!
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                    <Col className="item">
                        <div className="item-in">
                            <img
                                variant="top"
                                src={`https://unsplash.it/500/300/?image=${rand()}`}
                                className="image-featured"
                            />
                            <h4>Some Kind of Title</h4>
                            <div className="seperator"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Modi expedita eveniet
                                consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem!
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                        <div className="item-in">
                            <img
                                variant="top"
                                src={`https://unsplash.it/500/300/?image=${rand()}`}
                                className="image-featured"
                            />
                            <h4>Some Kind of Title</h4>
                            <div className="seperator"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Modi expedita eveniet
                                consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem!
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                    <Col className="item">
                        <div className="item-in">
                            <img
                                variant="top"
                                src={`https://unsplash.it/500/300/?image=${rand()}`}
                                className="image-featured"
                            />
                            <h4>Some Kind of Title</h4>
                            <div className="seperator"></div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Modi expedita eveniet
                                consectetur, voluptates voluptatum, sit
                                excepturi earum. Veniam eius amet, accusantium,
                                deserunt officia, quos qui debitis laboriosam
                                velit quis autem!
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;
