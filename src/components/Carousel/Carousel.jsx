import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import pictureService from "../../services/picture.services";
import Loading from "../Loading/Loading";

const CarouselComponent = () => {

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
    console.log(pictures)

    if (!pictures) {
      return (
          <Loading />
      )
  }
  return(
    <div >
    <Carousel style={{height:"400px",width:"500px",backgroundColor:"#f0ead6"}}>
      {pictures.map((picture, index) => (
        <Carousel.Item key={index} style={{height:"400px",width:"500px",}}>
          <div style={{backgroundImage:`url(${picture.photo})`,
          height: "100%",
          width: "100%",
          backgroundSize:"contain",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat"}}>
          </div>
          <Carousel.Caption>
            <h3>{picture.name}</h3>
            <p>{picture.height}x{picture.width}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}
export default CarouselComponent