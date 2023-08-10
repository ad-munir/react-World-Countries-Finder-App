import { useContext } from "react";
import { CountryContext } from "../Contexts/CountryContext";

function CountryInfo() {
    const {username, country, setCountry} = useContext(CountryContext)

    console.log(username)
    console.log(country)
    return (
        <div>
            <h1>hello {username}</h1>
            <p>Received data: {country.name}</p>
        </div>
    );
}

export default CountryInfo