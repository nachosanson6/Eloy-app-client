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
        <div className="productInformation">
            <div className="topFrame">
                <div className="buttonFrame">
                    <button className='backwardsButton' onClick={() => window.history.back()}>&lt;</button>
                </div>
                <div className="titleFrame">
                    <h3>{productDetails.name}</h3>
                </div>
                <button onClick={() => { setShowContactModal(true) }} className='contactButton'>Contactar con Eloy</button>
            </div>
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


// <>
//     <h2>{productDetails.name}</h2>
//     <h3>Medidas: {productDetails.height} x {productDetails.width}</h3>

//     {productDetails.materials && (
//         <>
//             <h3>Materiales:</h3>
//             {productDetails.materials.map((material, index) => (
//                 <h4 key={index}> - {material}</h4>
//             ))}
//         </>
//     )}
//     {productDetails.colors && (
//         <>
//             <h3>Colores:</h3>
//             {productDetails.colors.map((material, index) => (
//                 <h4 key={index}> - {material}</h4>
//             ))}
//         </>
//     )}

// </>


{/* {productDetails.materials && (
                                <>
                                    <h4>Materiales:</h4>
                                    {productDetails.materials.map((material, index) => (
                                        <h4 key={index}> - {material}</h4>
                                    ))}
                                </>
                            )}
                            {productDetails.colors && (
                                <>
                                    <h4>Colores:</h4>
                                    {productDetails.colors.map((material, index) => (
                                        <h4 key={index}> - {material}</h4>
                                    ))}
                                </>
                            )} */}