import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'
const Loading = () => {
    return (
        <div className="loading">
            <Spinner className='spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loading;