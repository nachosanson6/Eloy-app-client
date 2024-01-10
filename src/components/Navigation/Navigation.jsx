import { useContext, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap'
import PicturesForm from '../PicturesForm/PicturesForm'
import SculptureForm from '../SculpturesForm/SculptureForm'
import JewelryForm from '../JewelryForm/JewelryForm'
import LoginForm from '../LoginForm/LoginForm'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState()
    const { logout, loggedUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const closeLogin = () => {
        setShowModal(false)
        navigate('/')
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Eloy-app</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/'} className='btn'>Home</Link>

                            <Link to={'/picturesGallery'} className='btn'>Cuadros</Link>

                            <Link to={'/sculpturesGallery'} className='btn'>Esculturas</Link>

                            <Link to={'/jewelryGallery'} className='btn'>Bisutería</Link>


                            {!loggedUser && (
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
                                        <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("picture") }}>
                                            Nuevo cuadro
                                        </Button>
                                        <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("sculpture") }}>
                                            Nueva escultura
                                        </Button>
                                        <Button variant="dark" className="nav-link " onClick={() => { setShowModal(true); setType("jewelry") }}>
                                            Nueva bisutería
                                        </Button>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-2" style={{ color: "black" }}>Añadir</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {type === "picture" &&
                        <PicturesForm closeLogin={closeLogin}/>
                    }
                    {type === "sculpture" &&
                        <SculptureForm closeLogin={closeLogin}/>
                    }
                    {type === "jewelry" &&
                        <JewelryForm closeLogin={closeLogin}/>
                    }
                    {type === "login" &&
                        <LoginForm closeLogin={closeLogin} />
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Navigation