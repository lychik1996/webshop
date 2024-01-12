import { Link } from 'react-router-dom';
import './notFound.scss';
export default function NotFound(){
    return(
        <>
        <div className='container'>
        <div className="notFound_map">
          <Link to="/" className="notFound_map-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/notFound" className="notFound_map-notFound">
            404 Error
          </Link>
        </div>
        <div className='notFound_info'>
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Link to=''>Back to home page</Link>
        </div>
        </div>
        </>
    )
}