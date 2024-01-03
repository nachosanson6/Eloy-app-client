import { Link } from "react-router-dom"
import "./ProductCard.css"


const ProductCard = ({ name, photo, _id }) => {
    return (
        <>
        
            <Link to={`/productDetails/${_id}`}>
                <img className="picturePhoto" src={photo} alt="" />
            </Link>
        </>
    )
}
export default ProductCard