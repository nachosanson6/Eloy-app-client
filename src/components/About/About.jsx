import './About.css'
import artistPicture from './../../images/image 12.svg'

const About = () => {
    return (
        <div className="about">
            <h3>Sobre el artista</h3>
            <div className="content">
                <img className='artistPicture' src={artistPicture} alt="" />
                <div className="text">
                    <h4 className="artistName"> Eloy Sansón Kauffman</h4>
                    <p className="artistDescription">
                        For athletes, high altitude produces two contradictory effects on performance. For explosive events
                        Physiological respiration involves the mechanisms that ensure that the composition of the functional
                        The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s
                        Physical space is often conceived in three linear dimensions, although modern physicists usually con
                        In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in wh
                        Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves
                    </p>
                    <button className='contactButton'>Contactar con Eloy</button>
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