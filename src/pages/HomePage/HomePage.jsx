import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import Claim from "../../components/Claim/Claim";
import About from "../../components/About/About";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import { useEffect, useState } from "react";
import allProductsService from "../../services/allProducts.services";

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

  return (
    <div className="homePage">
      <Claim />
      <VerticalLine />
      <SelectecProductsCarousel photos={photos} />
      <VerticalLine />
      <About />
    </div>
  )
}
export default HomePage