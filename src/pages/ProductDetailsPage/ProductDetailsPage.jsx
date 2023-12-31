import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import pictureService from "../../services/picture.services"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import sculptureService from "../../services/sculpture.services"
import jewelryService from "../../services/jewelry.services"

const ProductDetailsPage = () => {

    const {product_id}  = useParams()
    const [productDetails,setProductDetails] = useState(null)

useEffect(() => {
    loadPicturesDetails()
    loadSculpturesDetails()
    loadJewelryDetails()
},[])

const loadPicturesDetails = () =>{
    pictureService
    .getOnePicture(product_id)
    .then(({ data }) => setProductDetails(data))
    .catch((err) => console.log(err))
}

const loadSculpturesDetails = () =>{
    sculptureService
    .getOneSculpture(product_id)
    .then(({ data }) => setProductDetails(data))
    .catch((err) => console.log(err))
}

const loadJewelryDetails = () =>{
    jewelryService
    .getOneJewelry(product_id)
    .then(({ data }) => setProductDetails(data))
    .catch((err) => console.log(err))
}



if (!productDetails) {
    return (
        <Loading />
    )
}
console.log(productDetails)
console.log(productDetails.photo)
    return(
        <Container>
        <h2>Detalles del producto</h2>
        <h3>{productDetails.name}</h3>
        <img src="{productDetails.photo}" alt="" />
        </Container>
    )
}
export default ProductDetailsPage