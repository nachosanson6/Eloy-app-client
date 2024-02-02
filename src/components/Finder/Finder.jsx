import './FInder.css'
import filterIcon from './../../images/controls-alt.svg'
import searchIcon from './../../images/search.svg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Finder = ({ onSearchTermChange }) => {
    return (
        <div className="finder">
            <div className="finderContent">
                <div className="textareaFrame">
                    <img src={searchIcon} className='search' alt="" />
                    <input name="finderTextarea"
                        className='textarea'
                        placeholder="Busca alguna obra"
                        onChange={(e) => onSearchTermChange(e.target.value)}
                    >

                    </input >
                </div>
                <Button className='filter'>
                    <img src={filterIcon} alt="" />
                </Button>
            </div>
            <div className="buttonsFrame">
                <Link to={'/productsGallery'} className='btn'>Todos</Link>
                <Link to={'/picturesGallery'} className='btn'>Pintura</Link>
                <Link to={'/sculpturesGallery'} className='btn'>Escultura</Link>
                <Link to={'/jewelryGallery'} className='btn'>Joyería</Link>
            </div>
        </div >
    )
}

export default Finder