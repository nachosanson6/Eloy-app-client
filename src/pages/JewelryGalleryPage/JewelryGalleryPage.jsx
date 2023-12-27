import { useEffect, useState } from "react"
import jewelryService from "../../services/jewelry.services"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Container } from "react-bootstrap"

const JewelryGalleryPage = () => {

    const [jewerlry, setJewerlry] = useState(null)

    useEffect(() => {
        loadJewerlry()
    }, [])

    const loadJewerlry = () => {
        jewelryService
            .getAllJewelry()
            .then(({ data }) => setJewerlry(data))
            .catch(err => console.log(err))
    }

    if (!jewerlry) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Container>

                <h1>Toda la bisutería</h1>

                <ProductList element={jewerlry} />

            </Container>
        </>
    )
}
export default JewelryGalleryPage