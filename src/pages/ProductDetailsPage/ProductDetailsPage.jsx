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
    loadProductDetails()
  }, [product_id])

const loadProductDetails = () => {
    // Intenta cargar detalles de la colección de pictures
    pictureService
      .getOnePicture(product_id)
      .then(({ data }) => {
        if (data) {
          setProductDetails(data)
        } else {
          // Si no se encuentra en pictures, intenta en la colección de sculptures
          return sculptureService.getOneSculpture(product_id)
        }
      })
      .then(({ data }) => {
        if (data && !productDetails) {
          setProductDetails(data)
        } else {
          // Si no se encuentra en sculptures, intenta en la colección de jewelry
          return jewelryService.getOneJewelry(product_id)
        }
      })
      .then(({ data }) => {
        if (data && !productDetails) {
          setProductDetails(data)
        }
      })
      .catch((err) => console.log(err))
  }


if (!productDetails) {
    return (
        <Loading />
    )
}
    return(
        <Container>
        <h2>Detalles del producto</h2>
        <h3>{productDetails.name}</h3>
        <h3>{productDetails._id}</h3>
        <img src={productDetails.photo} alt="" />
        </Container>
    )
}
export default ProductDetailsPage