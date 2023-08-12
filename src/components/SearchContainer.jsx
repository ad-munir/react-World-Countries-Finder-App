/* eslint-disable react/prop-types */
import Filter from "./Filter"
import SearchBar from "./SearchBar"

const SearchContainer = ({ countries, setSearchResult, searchResult, setLoading }) => {


    return (
        <div className="search-container">
            <h2>Search for a Country</h2>
            <div className="search-form">

                <SearchBar countries={countries} setSearchResult={setSearchResult} searchResult={searchResult} setLoading={setLoading} />
                <Filter name={"continent"} options={[]} />
                <Filter name={"language"} options={["ahkb", "bbhbn", "cjkj"]} />


                <div className="search-group">
                    <button className="clear-btn">Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer