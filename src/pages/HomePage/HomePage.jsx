import { Container, Row, Col } from "react-bootstrap"
import Carousel from "../../components/Carousel/Carousel"
import { useEffect, useState } from "react";
import pictureService from "../../services/picture.services";

const HomePage = () => {

    const images = [
        'https://res.cloudinary.com/dpkuxyam6/image/upload/v1701968049/sh23xrisdeeu6rg20sja.jpg',
        'https://res.cloudinary.com/dpkuxyam6/image/upload/v1703670416/btnfsa96mp27lkgt6yp9.png',
        'https://res.cloudinary.com/dpkuxyam6/image/upload/v1703697460/psfjc4pn5xjyfbxmshkf.jpg',
      ];

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <h1>Home Page</h1>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomePage