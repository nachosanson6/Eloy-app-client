import './ProductInformation.css'
import { ContactModalContext } from '../../contexts/contactModal.context'
import { useContext } from 'react'
import MaximiseIcon from './../../images/maximise.svg'
import Carousel from '../Carousel/Carousel'
import { Link } from 'react-router-dom'

const ProductInformation = ({ productDetails }) => {

    const { showContactModal, setShowContactModal } = useContext(ContactModalContext)
    const allPhotos = [productDetails.photo, productDetails.photo2, productDetails.photo3]

    let chipContent;
    switch (productDetails.product) {
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

    let materials = '';
    if (productDetails.materials.length === 1) {
        materials = productDetails.materials[0].toLowerCase();
    } else if (productDetails.materials.length === 2) {
        materials = `${productDetails.materials[0].toLowerCase()} y ${productDetails.materials[1].toLowerCase()}`;
    } else if (productDetails.materials.length > 2) {
        const lowercaseMaterials = productDetails.materials.map(material => material.toLowerCase());
        materials = lowercaseMaterials.slice(0, -1).join(', ') + ` y ${lowercaseMaterials.slice(-1)}`;
    }

    let galleryLink = '';

    // Definir la URL de destino según el tipo de producto
    switch (productDetails.product) {
        case 'Pictures':
            galleryLink = '/picturesGallery';
            break;
        case 'Sculptures':
            galleryLink = '/sculpturesGallery';
            break;
        case 'Jewelry':
            galleryLink = '/jewelryGallery';
            break;
        default:
            // Si el tipo de producto no coincide con ninguno de los casos anteriores, 
            // puedes redirigirlo a una página de error o a una galería por defecto
            galleryLink = '/defaultGallery';
            break;
    }

    return (
        <div id="productInformation" className="productInformation">
            <div className="topFrame">
                <div className="buttonFrame">
                    <Link to={galleryLink} className='backwardsButton'>
                        &lt;
                    </Link>
                    {window.innerWidth <= 480 &&
                        <button onClick={() => { setShowContactModal(true) }} className='contactButton'>Contactar con Eloy</button>
                    }
                </div>
                <div className="titleFrame">
                    <h3>{productDetails.name}</h3>
                </div>
                {window.innerWidth >= 480 &&
                    <button onClick={() => { setShowContactModal(true) }} className='contactButton'>Contactar con Eloy</button>
                }            </div>
            <div className="bottomFrame">
                <div className="content">
                    <Carousel photos={allPhotos} />
                    <div className="textFrame">
                        <div className="informationFrame">
                            <h4>Medidas: {productDetails.height} x {productDetails.width}</h4>
                            {productDetails.prize && (
                                <h4>Precio: {productDetails.prize}€</h4>
                            )}

                        </div>
                        <p className="description">
                            {chipContent} hecha artesanalmente con {materials} que mide {productDetails.height}cm de altura y {productDetails.width}cm de ancho.
                            {productDetails.prize && `Tiene un precio de ${productDetails.prize}€`}
                        </p>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductInformation