import { Col, Row } from "react-bootstrap"
import ProductCard from "../ProductCard/ProductCard"



const ProductList = ({ element }) => {
    return (
        <Row>
            {
                element.map(elm => {
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