import { Link } from "react-router-dom"
import "./ProductCard.css"


const ProductCard = ({ name, photo, _id, product, height, width, materials, colors }) => {
    let chipContent;
    switch (product) {
        case 'Pictures':
            chipContent = 'Pintura';
            break;
        case 'Sculptures':
            chipContent = 'Escultura';
            break;
        case 'Jewelry':
            chipContent = 'Bisutería';
            break;
        default:
            chipContent = 'Tipo Desconocido';
            break;
    }

    return (
        <>
            <div className="card">
                <Link to={`/productDetails/${_id}`} className="imageLink">
                    <img src={photo} alt="" className="image" />
                    <p className="chip">{chipContent}</p>
                </Link>
            </div>
            <h4 className="productName">{name}</h4>
            <p className="productDetails" >{height} x {width}</p>
        </>
    )
}
export default ProductCard