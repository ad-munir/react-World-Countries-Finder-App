import { useContext } from "react";
import { CountryContext } from "../Contexts/CountryContext";

function CountryInfo() {
    const { username, country } = useContext(CountryContext)

    console.log(username)
    console.log(country)
    return (
        <div>
            <h1>hello {username}</h1>
            <div className="country-info-card">
                <div className="country-info">
                    <h5>Name: {country.name}</h5>
                    <h5>Code: {country.code}</h5>
                    <h5>Capital: {country.capital}</h5>
                    <h5>Language: {country.language}</h5>
                    <h5>Population: {country.population}</h5>
                    <h5>Area: {country.area} Km²</h5>
                    <h5>Continent: {country.region}</h5>
                </div>
                <div className="country-info-img-container">
                    <img src={country.flag} alt={country.name} className="country-info-img" />
                    <div className="country-info-border"></div>
                </div>
            </div>
        </div>
    );
}

export default CountryInfo