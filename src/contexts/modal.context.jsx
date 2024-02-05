import { createContext, useEffect, useState } from "react"


const ModalContext = createContext()

const ModalWrapper = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState()
    const [isEdition, setIsEdition] = useState(false)


    return (
        <ModalContext.Provider value={{ showModal, setShowModal, type, setType, isEdition, setIsEdition }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalWrapper }