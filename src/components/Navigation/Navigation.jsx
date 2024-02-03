import { useContext, useEffect, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap'
import PicturesForm from '../PicturesForm/PicturesForm'
import SculptureForm from '../SculpturesForm/SculptureForm'
import JewelryForm from '../JewelryForm/JewelryForm'
import LoginForm from '../LoginForm/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"
import logoLight from "./../../../src/images/Logotipo Light.svg"
import { ContactModalContext } from '../../contexts/contactModal.context'
import ContactForm from '../ContactForm/ContactForm'
import { ModalContext } from '../../contexts/modal.context'


const Navigation = () => {


    const { logout, loggedUser } = useContext(AuthContext)
    const [isNavbarTransparent, setIsNavigationTransparent] = useState(false)
    const { showContactModal, setShowContactModal } = useContext(ContactModalContext)
    const { showModal, setShowModal, type, setType, isEdition, setIsEdition } = useContext(ModalContext)


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

    const navigate = useNavigate()

    const closeLogin = () => {
        setShowModal(false)
        navigate('/')
    }
    const url = window.location.href;
    const apiUrl = import.meta.env.VITE_FRONTEND_URL

    const handleScroll = () => {
        setIsNavigationTransparent(window.scrollY > 50)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Agregamos el evento de scroll cuando el componente está montado
        window.addEventListener('scroll', handleScroll);

        // Limpiamos el evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Navbar expand="lg" id='navigation'
                style={{ backgroundColor: isNavbarTransparent ? 'rgba(255, 255, 255, 0.6)' : 'white', padding: '10px' }}>
                <Container >
                    <Navbar.Brand href="#home" onClick={scrollToTop}>
                        <Link to={'/'}>
                            <img className='logoLight'
                                src={logoLight}
                            />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <div className="element">
                            <Link to={'/productsGallery'} className='btn'>Galería</Link>

                            <Link to={'/'} className='btn'>El artista</Link>

                            {/* <Link to={'/jewelryGallery'} className='btn'>Bisutería</Link> */}
                        </div>

                        {(!loggedUser && url.includes(`${apiUrl}/admin`)) && (
                            <Button variant="dark" className="nav-link" onClick={() => { setShowModal(true); setType("login") }}>
                                Log In
                            </Button>
                        )}

                        {loggedUser && (
                            <>
                                <Button variant="dark" className="nav-link" onClick={logout}>
                                    Log Out
                                </Button>

                                <NavDropdown title="Añadir" id="basic-nav-dropdown">
                                    <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("Pictures"); setIsEdition(false) }}>
                                        Nuevo cuadro
                                    </Button>
                                    <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("Sculptures") }}>
                                        Nueva escultura
                                    </Button>
                                    <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("Jewelry") }}>
                                        Nueva bisutería
                                    </Button>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-2" style={{ color: "black" }}>Añadir</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {type === "Pictures" &&
                        <PicturesForm closeLogin={closeLogin} newPictureForm={newPictureForm} setNewPictureForm={setNewPictureForm} />
                    }
                    {type === "Sculptures" &&
                        <SculptureForm closeLogin={closeLogin} />
                    }
                    {type === "Jewelry" &&
                        <JewelryForm closeLogin={closeLogin} />
                    }
                    {type === "login" &&
                        <LoginForm closeLogin={closeLogin} />
                    }
                </Modal.Body>
            </Modal>

            <Modal show={showContactModal} onHide={() => setShowContactModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-2" style={{ color: "#BC9C2E" }}>Contacta con Eloy</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ContactForm />

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Navigation