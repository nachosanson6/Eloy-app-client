import "./Footer.css"
import logoDark from "./../../../public/images/Logotipo Dark.svg"
import envelope from "./../../../public/images/envelope-alt.svg"
import phone from "./../../../public/images/phone.svg"
const Footer = () => {
    return (
        <footer>
            <div className="information">
                <div className="info-item">
                    <img src={logoDark} alt="Logo" />
                </div>
                <div className="info-item">
                    <img src={phone} alt="Phone" />
                    <p className="contact-info">655543327</p>
                </div>
                <div className="info-item">
                    <img src={envelope} alt="Envelope" />
                    <p className="contact-info">elosankau@hotmail.es</p>
                </div>
            </div>
            <div className="rights">
                <p>© 2024 Erretres. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer