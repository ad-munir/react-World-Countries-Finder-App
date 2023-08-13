/* eslint-disable react/prop-types */

const ContinentFilter = ({ name, selectedRegion, setSelectedRegion }) => {

    const regions = ['All', 'Americas', 'Europe', 'Africa', 'Asia', 'Oceania'];

    return (
        <div className="search-group">
            <label htmlFor="dropdown">{name}</label>
            <div className="select-dropdown" id="dropdown" >
                <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                >
                    {regions.map(region => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default ContinentFilter