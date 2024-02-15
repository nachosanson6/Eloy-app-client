import { Link } from "react-router-dom"
import "./ProductCard.css"


const ProductCard = ({ name, photo, _id, prize, product, height, width, materials, colors, sold }) => {
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
        <div className="productCard">
            <div className="card">
                <Link to={`/productDetails/${_id}`} className="imageLink">
                    <img src={photo} alt="" className="image" />
                    <p className="chip">{sold ? "Vendido" : chipContent}</p>
                </Link>
            </div>
            <div className="allInformation">
                <div className="information">
                    <h4 className="productName">{name}</h4>
                    <p className="prize" >{prize}€</p>
                </div>
                {height &&
                    <p className="productDetails" >{height} x {width}</p>
                }
            </div>
        </div>
    )
}
export default ProductCard