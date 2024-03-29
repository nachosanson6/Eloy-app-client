import { useContext, useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import pictureService from "../../services/picture.services"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "../../components/Loading/Loading"
import sculptureService from "../../services/sculpture.services"
import jewelryService from "../../services/jewelry.services"
import "./ProductDetailsPage.css"
import ProductInformation from "../../components/ProductInformation/ProductInformation"
import { AuthContext } from "../../contexts/auth.context"
import { ModalContext } from '../../contexts/modal.context'
import { ProductInformationContext } from '../../contexts/productInformation.context'
import './ProductDetailsPage.css'
import VertialLine from "../../components/VerticalLine/VerticalLine"
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import allProductsService from "../../services/allProducts.services"

const ProductDetailsPage = () => {

  const { product_id } = useParams()
  const [productDetails, setProductDetails] = useState(null)
  const [carouselElements, setCarouselElements] = useState()
  const { loggedUser } = useContext(AuthContext)
  const areDetails = true
  const { setShowModal, setType, setIsEdition } = useContext(ModalContext)
  const { newPictureForm, setNewPictureForm, newSculptureForm, setNewSculptureForm, newJewelryForm, setNewJewelryForm } = useContext(ProductInformationContext)

  const navigate = useNavigate()


  useEffect(() => {
    loadProductDetails()
  }, [product_id])

  const loadProductDetails = () => {

    allProductsService
      .getOneProduct(product_id)
      .then(({ data }) => {
        setCarouselElements(data.carouselElements)
        setProductDetails(data.productDetails)
      })

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
  console.log(productDetails)

  return (
    <div className="ProductDetailsPage">


      <ProductInformation productDetails={productDetails} />

      {carouselElements && carouselElements.length > 0 && (
        <>
          <VertialLine />
          <SelectecProductsCarousel photos={carouselElements} areDetails={areDetails} />
        </>
      )}

      {loggedUser && (
        <div className="loggedUserButtons">
          <Button variant="outline-danger" onClick={deleteProduct}>Eliminar</Button>
          <Button variant="outline-success" onClick={() => {
            setShowModal(true);
            setType(productDetails.product);
            setIsEdition(true);
            if (productDetails.product === "Pictures") {
              setNewPictureForm(productDetails);
            } else if (productDetails.product === "Sculptures") {
              setNewSculptureForm(productDetails);
            } else if (productDetails.product === "Jewelry") {
              setNewJewelryForm(productDetails);
            }
          }}>Editar</Button>
        </div>
      )}
    </div>
  )
}
export default ProductDetailsPage