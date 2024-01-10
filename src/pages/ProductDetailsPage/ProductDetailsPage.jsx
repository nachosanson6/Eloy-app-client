import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import pictureService from "../../services/picture.services"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import sculptureService from "../../services/sculpture.services"
import jewelryService from "../../services/jewelry.services"

const ProductDetailsPage = () => {

    const {product_id}  = useParams()
    const [productDetails,setProductDetails] = useState(null)
    const navigate = useNavigate()

useEffect(() => {
    loadProductDetails()
  }, [product_id])

const loadProductDetails = () => {
    pictureService
      .getOnePicture(product_id)
      .then(({ data }) => {
        if (data) {
          setProductDetails(data)
        } else {
          return sculptureService.getOneSculpture(product_id)
        }
      })
      .then(({ data }) => {
        if (data && !productDetails) {
          setProductDetails(data)
        } else {
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

  const deleteProduct = () => {
    pictureService.deletePicture(product_id)
      .then((response) => {
        if (response.status === 202 && productDetails.product==="Pictures") {
          console.log(productDetails)
          navigate('/picturesGallery');
        } else {
          return sculptureService.deleteSculpture(product_id);
        }
      })
      .then((response) => {
        if (response.status === 202 && productDetails.product==="Sculptures") {
          console.log("estrando en la coleccion de esculturas")
          navigate('/sculpturesGallery');
        } else {
          return jewelryService.deleteJewelry(product_id);
        }
      })
      .then((response) => {
        if (response.status === 202 && productDetails.product==="Jewelry") {
          console.log("estrando en la coleccion de bisuteria", response)
          navigate('/jewelryGallery');
        }
      })
      .catch((err) => console.log(err));
  };

if (!productDetails) {
    return (
        <Loading />
    )
}
    return(
        <Container>
        <h2>Detalles del producto</h2>
        <h3>{productDetails.name}</h3>
        <img src={productDetails.photo} alt="" />

        <Button variant="outline-danger" onClick={deleteProduct}>Eliminar</Button>
        </Container>
    )
}
export default ProductDetailsPage