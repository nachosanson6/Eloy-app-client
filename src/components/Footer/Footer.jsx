import "./Footer.css"
import logoDark from "./../../../src/images/Logotipo Dark.svg"
import envelope from "./../../../src/images/envelope-alt.svg"
import phone from "./../../../src/images/phone.svg"
const Footer = () => {
    return (
        <footer>
            <div className="footerComponent">
                <div className="information">
                    <div className="info-item">
                        <img src={logoDark} alt="Logo" />
                    </div>
                    <div className="info-item">
                        <img src={envelope} alt="Envelope" />
                        <p className="contact-info">elosankau@hotmail.es</p>
                    </div>
                </div>
            </div>
            <div className="rights">
                <p>© 2024 Erretres. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
