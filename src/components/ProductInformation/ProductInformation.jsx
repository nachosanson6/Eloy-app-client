import './ProductInformation.css'
import { ContactModalContext } from '../../contexts/contactModal.context'
import { useContext } from 'react'
import MaximiseIcon from './../../images/maximise.svg'
import Carousel from '../Carousel/Carousel'

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

    return (
        <div id="productInformation" className="productInformation">
            <div className="topFrame">
                <div className="buttonFrame">
                    <button className='backwardsButton' onClick={() => window.history.back()}>&lt;</button>
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