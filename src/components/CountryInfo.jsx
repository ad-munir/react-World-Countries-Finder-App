import { useContext } from "react";
import { CountryContext } from "../Contexts/contexts";
import Header from "./Header";
import './../country-info.css'

function CountryInfo() {
    const { country, darkMode } = useContext(CountryContext)


    return (
        <div>

            <Header />
            <div className={darkMode ? "wrapper dark" : "wrapper light"}>

                <div className={darkMode ? "country-container dark" : "country-container light"}>
                    <img src={country.flag} alt={country.name} className="country-flag" />




                    <div className="country-info">
                        <ul>
                            <li>
                                <h5>Name:</h5>
                                <span> {country.name} </span>
                            </li>
                            <li>
                                <h5>Code:</h5>
                                <span> {country.code} </span>
                            </li>
                            <li>
                                <h5>Capital:</h5>
                                <span> {country.capital} </span>

                            </li>
                            <li>
                                <h5>Language:</h5>
                                <span> {country.languages.join(', ')} </span>
                            </li>
                            <li>
                                <h5>Population:</h5>
                                <span> {country.population} </span>

                            </li>
                            <li>
                                <h5>Area:</h5>
                                <span> {country.area} Km² </span>

                            </li>
                            <li>
                                <h5>Continent:</h5>
                                <span> {country.region} </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CountryInfo