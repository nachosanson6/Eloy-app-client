import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom"
import { AuthContext } from './../../contexts/auth.context'
// import './LoginForm.css'

const LoginForm = ({ closeLogin }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [type, setType] = useState('password');

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                closeLogin()
            })
            .catch(err => console.log(err))
    }

    const handleToggle = () => {
        const typeValue = type === 'password' ? 'text' : 'password'
        setType(typeValue)
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3 fs-5" style={{ color: "black" }} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3 fs-5" style={{ color: "black" }} controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type={type} value={loginData.password} onChange={handleInputChange} name="password" id="myInput" />
                <input type="checkbox" onClick={handleToggle} />Mostrar contraseña
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Acceder</Button>
            </div>

        </Form>
    )
}

export default LoginForm