import { Container, Row, Col } from "react-bootstrap"
import PicturesForm from "../../components/PicturesForm/PicturesForm"
import SculptureForm from "../../components/SculpturesForm/SculptureForm"
import JewelryForm from "../../components/JewelryForm/JewelryForm"

const HomePage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <h1>Home Page</h1>
                        <PicturesForm />
                        <SculptureForm />
                        <JewelryForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomePage