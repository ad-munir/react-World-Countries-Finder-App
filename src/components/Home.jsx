import { useContext, useEffect, useState } from "react";
import { fetchCountries } from "../Api/restcountries";
import Header from "./Header";
import CountriesSection from "./CountriesSection";
import SearchContainer from "./SearchContainer";
import Loader from "./Loader";
import { CountryContext } from "../Contexts/contexts";

function Home() {

    const { darkMode } = useContext(CountryContext);

    const [countries, setCountries] = useState([]);
    const [searchedCountry, setSearchedCountry] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 200);

        fetchCountries().then(data => {
            setCountries(data);
        });
        setSearchedCountry(countries)
    }, [])




    return (
        <div className={darkMode ? "dark" : "light"}>

            <Header />
            <SearchContainer countries={searchedCountry} setSearchedCountry={setSearchedCountry} />
            {
                loading ?
                    <Loader />
                    :
                    <CountriesSection countries={searchedCountry} />
            }
        </div>
    )
}

export default Home