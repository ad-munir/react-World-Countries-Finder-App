import { useEffect, useState } from "react";
import Country from "./Country";


const url = 'https://restcountries.com/v3.1/all';

function Home() {

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
        return json.map(country => {
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
        }, 2000);


        fetchData();
    }, [])

    return (
        <div className='home-wrapper'>
            <div className="title">
                <h1>World Countries</h1>
                <div className="title-underline"></div>
            </div>
            {
                loading ?
                    <div>Loading..</div>
                    :
                    <div className="countries">
                        {
                            countries.map((country, index) => (
                                <Country key={index} name={country.name} flag={country.flag} />
                            ))
                        }
                    </div>

            }
        </div>
    )
}

export default Home