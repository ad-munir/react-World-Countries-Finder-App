/* eslint-disable react/prop-types */
import { useState } from "react"
import Country from "./Country";
import ContinentsDropdown from "./ContinentsDropdown";

function SearchBar({ countries }) {

    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onWrite = (value) => {

        setInput(value);

        if (value === "") {
            setSearchResults([])

        } else {
            setSearchResults(displayResult(value));
        }

    }

    const displayResult = (value) => {
        return countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()));
    }



    console.log()
    return (
        <>
            <ContinentsDropdown />
            <div className="search-box">
                <input type="text" placeholder="search" onChange={(e) => onWrite(e.target.value)} className="search-input" />
                <button className="search-btn material-symbols-outlined">search</button>
            </div>
            {searchResults.length === 0 && input ?
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
            }
            <hr />

        </>
    )
}

export default SearchBar