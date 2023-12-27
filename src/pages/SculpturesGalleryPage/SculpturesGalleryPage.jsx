import { useEffect, useState } from "react"
import sculptureService from "../../services/sculpture.services"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Container } from "react-bootstrap"

const SculpturesGalleryPage = () => {

    const [sculptures, setSculptures] = useState(null)

    useEffect(() => {
        loadSculptures()
    }, [])

    const loadSculptures = () => {
        sculptureService
            .getAllSculptures()
            .then(({ data }) => setSculptures(data))
            .catch(err => console.log(err))
    }

    if (!sculptures) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Container>

                <h1>Todas las esculturas</h1>

                <ProductList element={sculptures} />

            </Container>
        </>
    )
}
export default SculpturesGalleryPage