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

  const deleteProduct = () => {
    // Intentar eliminar de la colección de pictures
    pictureService
      .deletePicture(product_id)
      .then(() => {
        // Si se elimina correctamente, navegar a la lista de productos correspondiente
        navigate('/picturesGallery');
      })
      .catch((pictureError) => {
        // Si hay un error en la colección de pictures, intentar eliminar de la colección de sculptures
        sculptureService
          .deleteSculpture(product_id)
          .then(() => {
            // Si se elimina correctamente, navegar a la lista de productos correspondiente
            navigate('/sculpturesGallery');
          })
          .catch((sculptureError) => {
            // Si hay un error en la colección de sculptures, intentar eliminar de la colección de jewelry
            jewelryService
              .deleteJewelry(product_id)
              .then(() => {
                // Si se elimina correctamente, navegar a la lista de productos correspondiente
                navigate('/jewelryGallery');
              })
              .catch((jewelryError) => {
                // Si hay un error en todas las colecciones, manejar el error o mostrar un mensaje al usuario
                console.log("Error deleting product:", jewelryError);
              });
          });
      });
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