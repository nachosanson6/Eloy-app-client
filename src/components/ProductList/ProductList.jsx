import { Col, Row } from "react-bootstrap"
import ProductCard from "../ProductCard/ProductCard"



const ProductList = ({ pictures }) => {
    return (
        <Row>
            {
                pictures.map(elm => {
                    return (
                        <>
                            <Col lg={{ span: 3 }} md={{ span: 6 }} sm={{ span: 10 }} >
                                <ProductCard {...elm} />
                            </Col >

                        </>
                    )
                })
            }
        </Row >
    )
}
export default ProductList