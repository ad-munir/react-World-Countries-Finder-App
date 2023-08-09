/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Country({ country }) {
    
    const encodedData = encodeURIComponent(JSON.stringify(country));

    return (
        <Link to={`/country/${encodedData}`} className='country-card'>
            <div className="country-name">{country.name}</div>
            <div className="country-img-container">
                <img src={country.flag} alt={country.name} className="country-img"/>
                <div className="country-border"></div>
            </div>

        </Link>
    )
}

export default Country
