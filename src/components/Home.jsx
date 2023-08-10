import { useEffect, useState } from "react";
import Country from "./Country";
import SearchBar from "./SearchBar";


const url = 'https://restcountries.com/v3.1/all';

function Home() {

    // const { username, setUsername, country, setCountry } = useContext(CountryContext)
    // console.log(username)

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setCountries(convert(result));

        } catch (error) {
            setCountries([])
            console.error(error);
        }

    }

    function convert(json) {
        return json
            .filter(country => country.name.common !== "Western Sahara" && country.name.common !== "Israel")
            .map(country => {
                return {
                    'name': country.name.common,
                    'code': country.cca2,
                    'flag': country.flags.png,
                    'capital': country.capital,
                    'language': Object.values(country.languages || {}).join(', '),
                    'population': country.population,
                    'area': country.area,
                    'region': country.region,
                }
            });
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);


        fetchData();
    }, [])

    return (
        <div className='home-wrapper'>
            <div className="title">
                <h1>World Countries </h1>
                <div className="title-underline"></div>
            </div>
            {
                loading ?
                    <div>Loading..</div>
                    :
                    <>
                        <SearchBar countries={countries} />
                    </>
            }
        </div>
    )
}

export default Home