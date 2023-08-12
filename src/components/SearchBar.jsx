/* eslint-disable react/prop-types */
import { useState } from "react"

function SearchBar({ countries, setSearchedCountry }) {

    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    //old
    // const onWrite = (value) => {

    //     setInput(value);

    //     if (value === "") {
    //         setSearchResults([])

    //     } else {
    //         setSearchResults(displayResult(value));
    //     }

    // }

    const onWrite = (value) => {

        setInput(value);

        if (value === "") {
            // setSearchResults([])
            console.log("empty");

        } else {
            // setSearchResults(displayResult(value));
            setSearchedCountry(displayResult(value))
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
                <input type="text" placeholder="..." onChange={(e) => onWrite(e.target.value)} className="search-input" />
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