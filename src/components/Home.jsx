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

    const [searchResult, setSearchResult] = useState([]);
    const [resultsEmpty, setResultsEmpty] = useState(false);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
            setResultsEmpty(searchResult.length === 0)
        }, 1200);

        fetchCountries().then(data => {
            setCountries(data);
        });

    }, [])


    // console.log(countries)
    return (
        <div className={darkMode ? "dark" : "light"}>

            <Header />
            <SearchContainer countries={countries} setSearchResult={setSearchResult} setResultsEmpty={setResultsEmpty} />
            {
                loading ?
                    <Loader />
                    :
                    
                    resultsEmpty ? 
                    <div>not found</div>
                    :
                    <CountriesSection
                        countries={
                            searchResult.length > 0 ?
                                searchResult
                                :
                                countries
                        }
                    />
            }
        </div>
    )
}

export default Home