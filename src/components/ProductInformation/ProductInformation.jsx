const ProductInformation = ({ productDetails }) => {
    return (
        <>
            <h2>{productDetails.name}</h2>
            <h3>Medidas: {productDetails.height} x {productDetails.width}</h3>

            {productDetails.materials && (
                <>
                    <h3>Materiales:</h3>
                    {productDetails.materials.map((material, index) => (
                        <h4 key={index}> - {material}</h4>
                    ))}
                </>
            )}
            {productDetails.colors && (
                <>
                    <h3>Colores:</h3>
                    {productDetails.colors.map((material, index) => (
                        <h4 key={index}> - {material}</h4>
                    ))}
                </>
            )}

        </>
    )
}

export default ProductInformation