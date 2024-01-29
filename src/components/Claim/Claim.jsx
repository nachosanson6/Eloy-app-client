import { Container } from "react-bootstrap"
import "./Claim.css"
import { Link } from 'react-router-dom'

const Claim = () => {
    return (
        <div className="claim">
            <h1>Descubre El Mundo De Eloy</h1>
            <h4>Donde la Inspiración se Encuentra con la Creatividad</h4>
            <div className="claimButtons">
                <Link to={"/picturesGallery"}>
                    <button> Ver pinturas</button>
                </Link>
                <Link to={'/sculpturesGallery'} >
                    <button>Ver esculturas</button>
                </Link>
                <Link to={'/jewelryGallery'}>
                    <button>Ver joyería</button>
                </Link>

            </div>
        </div>
    )
}
export default Claim