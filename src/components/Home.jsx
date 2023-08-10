import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../Contexts/CountryContext";
import { fetchCountries } from "../Api/restcountries";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Country from "./Country";

function Home() {

    const { darkMode, toggleDarkMode } = useContext(CountryContext);

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 200);

        fetchCountries().then(data => {
            setCountries(data);
        });

    }, [])



    return (
        <div className={darkMode ? "dark" : "light"}>

            <Header />
            <SearchBox countries={countries} />
            {
                loading ?
                    <div className="loader">Loading..</div>
                    :
                    countries.map((country, index) => (
                        <Country key={index} country={country} />
                    ))
            }
        </div>
    )
}

export default Home