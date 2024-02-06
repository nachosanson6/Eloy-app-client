import './ProductInformation.css'
import { ContactModalContext } from '../../contexts/contactModal.context'
import { useContext } from 'react'
import MaximiseIcon from './../../images/maximise.svg'

const ProductInformation = ({ productDetails }) => {

    const { showContactModal, setShowContactModal } = useContext(ContactModalContext)

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

    return (
        <div className="productInformation">
            <div className="topFrame">
                <button className='backwardsButton' onClick={() => window.history.back()}>&lt;</button>
                <div className="titleFrame">
                    <h3>{productDetails.name}</h3>
                    <p>{chipContent}</p>
                </div>
                <button onClick={() => { setShowContactModal(true) }} className='contactButton'>Contactar con Eloy</button>
            </div>
            <div className="bottomFrame">
                <div className="content">
                    <div className="carouselFrame">
                        <div className="imageFrame">
                            <img className="image" src={productDetails.photo} alt="" />
                            <img className='icon' src={MaximiseIcon} alt="" />
                        </div>
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