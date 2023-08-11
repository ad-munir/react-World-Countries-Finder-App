/* eslint-disable react/prop-types */
import Filter from "./Filter"
import SearchBar from "./SearchBar"

const SearchBox = ({ countries }) => {



    return (
        <div className="search-container">
            <h2>Search for a Country</h2>
            <div className="search-form">
                <div className="search-group">
                    <label htmlFor="search-bar">Search</label>
                    <SearchBar countries={countries} />
                </div>

                <Filter name={"continent"} options={[]} />
                <Filter name={"language"} options={["a","b","c"]} />


                <div className="search-group">
                    <button className="clear-btn">Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox