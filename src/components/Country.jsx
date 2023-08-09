/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Country({ name, flag }) {
    const dataToSend = "kk";
    return (
        <Link to={`/country/${dataToSend}`} className='country-card'>
            <div className="country-name">{name}</div>
            <div className="country-img-container">
                <img src={flag} alt={name} className="country-img"/>
                <div className="country-border"></div>
            </div>

        </Link>
    )
}

export default Country
