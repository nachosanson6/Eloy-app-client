import './About.css'
import artistPicture from './../../images/IMG_7306.jpeg'
import { ContactModalContext } from '../../contexts/contactModal.context'
import { useContext } from 'react'

const About = () => {

    const { showContactModal, setShowContactModal } = useContext(ContactModalContext)

    return (
        <div className="about">
            <h3>Sobre el artista</h3>
            <div className="content">
                <img className='artistPicture' src={artistPicture} alt="" />
                <div className="text">
                    <h4 className="artistName"> Eloy Sansón Kauffman</h4>
                    <p className="artistDescription">
                        Desarrolló su vena artística cuando se prejubiló en 2013. Después de un largo descanso, se dio cuenta que los días se hacían largos si no tenía una ocupación y se preguntó: ¿Y ahora qué hago?
                        <br /> <br />
                        Estas eran las alternativas, a saber: <br />
                        - Buscar a otras personas para jugar al dominó o a la petanca. <br />
                        - ⁠Sentarse en un banco a ver cómo construyen un edificio. <br />
                        - ⁠Buscar alguna afición que le llenara y le mantuviera ocupado. <br /> <br />
                        Eligió esta última y se puso a pintar siguiendo algunos tutoriales. Al cabo de un tiempo empezó con las esculturas y la bisutería y, desde entonces, el artista no ha parado de hacer obras.
                        <br /> <br />
                        ¿Qué materiales utiliza? <br /> <br />
                        En las pinturas principalmente acrílico con pinceles y espátulas. En escultura, madera, cuerda, pintura y arcilla. En bisutería cualquier cosa vale: arcilla polimerica, pintura, tuercas, tornillos, etc.
                        <br /> <br />
                        Eloy ha encontrado una afición artística que le mantiene distraído, le gusta y disfruta realizándola. Le da una gran satisfacción.
                    </p>

                    <button onClick={() => { setShowContactModal(true) }} className='contactButton'>Contactar con Eloy</button>
                </div>
            </div>
            <div className="horizontalLineGap">
                <div className="horizontalLine"></div>
            </div>
            <div className="testimonialSection">

            </div>
        </div>
    )
}

export default About