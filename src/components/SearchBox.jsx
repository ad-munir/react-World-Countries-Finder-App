/* eslint-disable react/prop-types */
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

                <div className="search-group">
                    <label htmlFor="continent-dropdown">Continent</label>
                    <div className="select-dropdown" id="continent-dropdown" >
                        <select>
                            <option value="Option 1">First Option</option>
                            <option value="Option 2">2nd Option</option>
                            <option value="Option 3">Option Number 3</option>
                        </select>
                    </div>
                </div>

                <div className="search-group">
                    <label htmlFor="language-dropdown">Language</label>
                    <div className="select-dropdown" id="language-dropdown" >
                        <select>
                            <option value="Option 1">First Option</option>
                            <option value="Option 2">2nd Option</option>
                            <option value="Option 3">Option Number 3</option>
                        </select>
                    </div>
                </div>

                <div className="search-group">
                    <button className="clear-btn">Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox