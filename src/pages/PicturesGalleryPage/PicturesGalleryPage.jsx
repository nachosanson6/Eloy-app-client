import { useEffect, useState } from "react"
import pictureService from "../../services/picture.services"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Col, Container } from "react-bootstrap"

const PicturesGalleryPage = () => {

    const [pictures, setPictures] = useState(null)

    useEffect(() => {
        loadPictures()
    }, [])

    const loadPictures = () => {
        pictureService
            .getAllPictures()
            .then(({ data }) => setPictures(data))
            .catch(err => console.log(err))
    }

    if (!pictures) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Container>

                <h1>Todos los cuadros</h1>

                <ProductList pictures={pictures} />

            </Container>
        </>
    )
}
export default PicturesGalleryPage