import { createContext, useEffect, useState } from "react"


const ProductInformationContext = createContext()

const ProductInformationWrapper = (props) => {

    const [newPictureForm, setNewPictureForm] = useState({
        name: "",
        photo: "",
        height: "",
        width: "",
        prize: "",
        colors: [],
        materials: [],
        newMaterial: "",
        sold: false

    })

    const [newSculptureForm, setNewSculptureForm] = useState({
        name: "",
        photo: "",
        photo2: "",
        photo3: "",
        height: "",
        width: "",
        prize: "",
        materials: [],
        sold: false

    })

    const [newJewelryForm, setNewJewelryForm] = useState({
        name: "",
        photo: "",
        prize: "",
        materials: [],
        sold: false

    })


    return (
        <ProductInformationContext.Provider value={{ newPictureForm, setNewPictureForm, newSculptureForm, setNewSculptureForm, newJewelryForm, setNewJewelryForm }}>
            {props.children}
        </ProductInformationContext.Provider>
    )
}

export { ProductInformationContext, ProductInformationWrapper }