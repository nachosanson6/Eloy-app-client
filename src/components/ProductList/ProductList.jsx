import ProductCard from "../ProductCard/ProductCard"
import './ProductList.css'



const ProductList = ({ element }) => {
    return (
        <div className="product-list">
            {
                element.map((elm, index) => {
                    return (
                        <div key={index} className="product-item">
                            <ProductCard  {...elm} />
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ProductList