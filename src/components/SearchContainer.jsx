/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import SearchBar from "./SearchBar"
import ContinentFilter from "./ContinentFilter";

const regions = ['All', 'Americas', 'Europe', 'Asia', 'Oceania'];

const SearchContainer = ({ countries, setSearchResult, setLoading }) => {



    const [selectedRegion, setSelectedRegion] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = countries.filter(country => {
        if (selectedRegion === 'All' || country.region === selectedRegion) {
            return country.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
    });

    setTimeout(() => {
        setSearchResult(filteredCountries)
    }, 200);

    return (
        <div className="search-container">
            <h2>Search for a Country</h2>
            <div className="search-form">

                <SearchBar
                    setLoading={setLoading}
                    searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                />
                <ContinentFilter
                    name={"continent"}
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                />


                <div className="search-group">
                    <button className="clear-btn">Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer