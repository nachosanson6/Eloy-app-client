import { Container, Row, Col } from "react-bootstrap"
import CarouselComponent from "../../components/Carousel/Carousel"
import { useEffect, useState } from "react";
import pictureService from "../../services/picture.services";

const HomePage = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <h1>Home Page</h1>
                        <CarouselComponent/>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomePage