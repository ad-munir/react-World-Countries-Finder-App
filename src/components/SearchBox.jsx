/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar"

const SearchBox = ({countries}) => {


    
    return (
        <div className="search-box">
            <h2>Search Form</h2> 
            <div className="search-form">
                <div className="search-group">
                    <label htmlFor="search-bar">Search</label>
                    <SearchBar countries={countries} />
                </div>

                <div className="search-group">
                    <label htmlFor="continent-filter">Continent</label>
                    <input type="text" id="continent-filter" className="continent-filter" />
                </div>

                <div className="search-group">
                    <label htmlFor="language-filter">Language</label>
                    <input type="text" id="language-filter" className="language-filter" />
                </div>

                <div className="search-group">
                    <button>Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox