import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import Claim from "../../components/Claim/Claim";
import About from "../../components/About/About";
import VerticalLine from "../../components/VerticalLine/VerticalLine";

const HomePage = () => {

  return (
    <div className="homePage">
      <Claim />
      <VerticalLine />
      <SelectecProductsCarousel />
      <VerticalLine />
      <About />
    </div>
  )
}
export default HomePage