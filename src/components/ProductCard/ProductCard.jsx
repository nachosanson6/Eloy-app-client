import { Link } from "react-router-dom"
import "./ProductCard.css"


const ProductCard = ({ name, photo, _id, type }) => {
    return (
        <div className="card">

            <Link to={`/productDetails/${_id}`} className="imageLink">
                <img src={photo} alt="" className="image" />
                <p className="chip">{type}</p>
            </Link>
        </div>
    )
}
export default ProductCard