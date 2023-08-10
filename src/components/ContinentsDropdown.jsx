
const ContinentsDropdown = () => {
    return (
        <div className="continents-dropdown">
                <select id="continents">
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north-america">North America</option>
                    <option value="oceania">Oceania</option>
                    <option value="south-america">South America</option>
                </select>
                <div className="selected-continent"></div>
            </div>
    )
}

export default ContinentsDropdown