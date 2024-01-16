import { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import pictureService from "../../services/picture.services";
import Loading from "../Loading/Loading";
import allProductsService from "../../services/allProducts.services";

const CarouselComponent = () => {

  const [photos, setPhotos] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0);

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
    
    const handleThumbnailClick = (index) => {
    setActiveIndex(index);
        };

    if (!photos) {
      return (
          <Loading />
      )
  }
  return(
    <div>
      
          <Carousel style={{ height: "400px", width: "500px" }} activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)} style={{ height: "400px", backgroundColor: "#f0ead6" }} interval={null} indicators={false}>
            {photos.map((picture, index) => (
              <Carousel.Item key={index} style={{ height: "400px", width: "500px" }}>
                <img
                  src={picture}
                  alt={picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => window.open(picture.url, "_blank")}
                />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
       
      <Row className="mt-3">
        {photos.map((picture, index) => (
          <Col key={index} xs={2} md={1} className="mx-auto">
            <div
              className={`thumbnail ${index === activeIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${picture})`,
                height: "50px",
                width: "50px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
              onClick={() => handleThumbnailClick(index)}
            ></div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default CarouselComponent