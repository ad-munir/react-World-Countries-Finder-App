/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../Contexts/CountryContext';

function Country({ country }) {

    const { setCountry } = useContext(CountryContext)

    useEffect(() => {
        HandleSetCountry();
    }, [country, setCountry]);


    const HandleSetCountry = () => {
        setCountry(country)
    }

    

    return (
        <div onClick={() => HandleSetCountry()}>
            <Link to={`/country`} className='country-card'>
                <div className="country-name">{country.name}</div>
                <div className="country-img-container">
                    <img src={country.flag} alt={country.name} className="country-img" />
                    <div className="country-border"></div>
                </div>
            </Link>
        </div>

    )
}

export default Country
