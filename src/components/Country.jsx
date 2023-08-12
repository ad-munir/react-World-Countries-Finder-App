/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../Contexts/contexts';

function Country({ country }) {

    const { setCountry } = useContext(CountryContext)

    useEffect(() => {
        HandleSetCountry();
    }, [country, setCountry]);


    const HandleSetCountry = () => {
        setCountry(country)
    }



    return (
        <Link to={`/country`} >

            <div className="country-card" onClick={() => HandleSetCountry()}>
                <div className="country-name">
                    {country.name}
                </div>
                
                <div className="country-img">
                    <img src={country.flag} alt={country.name} className="country-img" />
                    <div className="country-border"></div>
                </div>
            </div>

        </Link>
    )
}

export default Country
