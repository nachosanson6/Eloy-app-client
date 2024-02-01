import { createContext, useEffect, useState } from "react"


const ContactModalContext = createContext()

const ContactModalWrapper = (props) => {

    const [showContactModal, setShowContactModal] = useState(false)

    return (
        <ContactModalContext.Provider value={{ showContactModal, setShowContactModal }}>
            {props.children}
        </ContactModalContext.Provider>
    )
}

export { ContactModalContext, ContactModalWrapper }