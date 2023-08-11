/* eslint-disable react/prop-types */
import Country from "./Country"

const CountriesSection = ({ countries }) => {
    return (
        <div className="countries-section">
            {
                countries.map((country, index) => (
                    <Country key={index} country={country} />
                ))
            }
        </div >
    )
}

export default CountriesSection