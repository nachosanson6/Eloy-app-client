import { useEffect, useState } from "react"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Container } from "react-bootstrap"
import allProductsService from "../../services/allProducts.services"

const ProductsGalleryPage = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        allProductsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }

    if (!products) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Container>

                <h1>Todos los productos</h1>

                <ProductList element={products} />

            </Container>
        </>
    )
}
export default ProductsGalleryPage