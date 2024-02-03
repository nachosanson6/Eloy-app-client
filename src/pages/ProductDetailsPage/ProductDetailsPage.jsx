import { useContext, useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import pictureService from "../../services/picture.services"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import sculptureService from "../../services/sculpture.services"
import jewelryService from "../../services/jewelry.services"
import "./ProductDetailsPage.css"
import CarouselComponent from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import ProductInformation from "../../components/ProductInformation/ProductInformation"
import { AuthContext } from "../../contexts/auth.context"
import { ModalContext } from '../../contexts/modal.context'


const ProductDetailsPage = () => {

  const { product_id } = useParams()
  const [productDetails, setProductDetails] = useState(null)
  const { loggedUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const { setShowModal, setType, setIsEdition } = useContext(ModalContext)


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
        if (response.status === 202 && productDetails.product === "Pictures") {
          navigate('/picturesGallery');
        } else {
          return sculptureService.deleteSculpture(product_id);
        }
      })
      .then((response) => {
        if (response.status === 202 && productDetails.product === "Sculptures") {
          navigate('/sculpturesGallery');
        } else {
          return jewelryService.deleteJewelry(product_id);
        }
      })
      .then((response) => {
        if (response.status === 202 && productDetails.product === "Jewelry") {
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
  const images = [productDetails.photo, productDetails.photo2, productDetails.photo3]
  return (
    <Container>
      <div className="allInformation">
        <img src={productDetails.photo} alt="" />
        <div className="productInformation" >
          <ProductInformation productDetails={productDetails} />
        </div>
      </div>
      {loggedUser && (
        <>
          <Button variant="outline-danger" onClick={deleteProduct}>Eliminar</Button>
          <Button variant="outline-success" onClick={() => { setShowModal(true); setType(productDetails.product); setIsEdition(true) }}>Editar</Button>

        </>
      )}
    </Container>
  )
}
export default ProductDetailsPage