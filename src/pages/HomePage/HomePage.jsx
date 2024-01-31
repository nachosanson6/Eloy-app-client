import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import Claim from "../../components/Claim/Claim";
import About from "../../components/About/About";

const HomePage = () => {

  return (
    <div className="homePage">
      <Claim />
      <SelectecProductsCarousel />
      <About />
    </div>
  )
}
export default HomePage