import { Container, Row, Col } from "react-bootstrap"
import CarouselComponent from "../../components/Carousel/Carousel"
import { useEffect, useState } from "react";
import allProductsService from "../../services/allProducts.services";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {

  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    try {
      const { data } = await allProductsService.getAllPhotos();
      const shuffledPhotos = data.sort(() => Math.random() - 0.5);
      setPhotos(shuffledPhotos);
    } catch (error) {
      console.error("Error loading photos:", error);
    }
  };
  // allProductsService
  //     .getAllPhotos()
  //     .then(({ data }) => setPhotos(data))
  //     .catch(err => console.log(err))
  if (!photos) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <Container>
        <h1>Home Page</h1>
        <div style={{ paddingTop: "20px" }}>
          <CarouselComponent photos={photos} />
        </div>
      </Container>
    </>
  )
}
export default HomePage