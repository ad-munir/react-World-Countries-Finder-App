/* eslint-disable react/prop-types */

function SearchBar({ searchQuery, setSearchQuery }) {


    return (
        <div className="search-group">
            <label htmlFor="search-bar">country</label>
            <div className="search-box">
                <input type="text" placeholder="..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
            </div>
        </div>
    )
}

export default SearchBar