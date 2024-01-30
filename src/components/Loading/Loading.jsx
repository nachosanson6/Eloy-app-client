import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'
const Loading = () => {
    return (
        <Spinner className='spinner' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default Loading;