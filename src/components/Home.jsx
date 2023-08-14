import { useContext, useEffect, useState } from "react";
import { fetchCountries } from "../Api/restcountries";
import Header from "./Header";
import CountriesSection from "./CountriesSection";
import SearchContainer from "./Search/SearchContainer";
import Loader from "./Loader";
import { CountryContext } from "../Contexts/contexts";

function Home() {

    const { darkMode, setDarkMode } = useContext(CountryContext);


    const [countries, setCountries] = useState([]);

    const [searchResult, setSearchResult] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        // Read dark mode status from local storage when component mounts
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);

        setTimeout(() => {
            setLoading(false);
        }, 1200);

        fetchCountries().then(data => {
            setCountries(data);
        });

    }, [])


    return (
            <div className={darkMode ? "dark" : "light"}>
            <Header />
                <SearchContainer countries={countries} setSearchResult={setSearchResult} />
                {
                    loading ?
                        <Loader />
                        :
                        searchResult.length > 0 ?
                            <CountriesSection countries={searchResult} />
                        :
                            <div className="not-found">Country Not Found</div>
                }
            </div>
    )
}

export default Home