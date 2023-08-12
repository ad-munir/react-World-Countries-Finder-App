/* eslint-disable react/prop-types */
import { useState } from "react"

function SearchBar({ countries, searchResult, setSearchResult, setLoading }) {
    
    const [input, setInput] = useState("");

    setTimeout(() => {
        setLoading(false);
    }, 1200);

    const onSearch = (value) => {
        setInput(value);

        if (value === "") {
            setSearchResult([]);
        } else {
            setLoading(true)
            setSearchResult(displayResult(value));
        }

    }
    const displayResult = (value) => {
        return countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()));
    }



    console.log()
    return (
        <div className="search-group">
            <label htmlFor="search-bar">country</label>
            <div className="search-box">
                <input type="text" placeholder="..." onChange={(e) => onSearch(e.target.value)} className="search-input" />
            </div>

            {/* {searchResults.length === 0 && input ?
                <h6>Not Found Country</h6>
                :
                (
                    <div className="countries">
                        {
                            input?
                                searchResults.map((res, index) => (
                                    <Country key={index} country={res} />
                                ))
                            :
                                countries.map((country, index) => (
                                    <Country key={index} country={country} />
                                ))
                        }
                    </div >
                )
            } */}

        </div>
    )
}

export default SearchBar