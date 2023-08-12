/* eslint-disable react/prop-types */

const Filter = ({ name, options }) => {

    return (
        <div className="search-group">
            <label htmlFor="dropdown">{name}</label>
            <div className="select-dropdown" id="dropdown" >
                <select>
                    {options.map( option => 
                        <option key={option} value={option}>
                            {option}
                        </option>
                    )}
                </select>
            </div>
        </div>
    )
}


export default Filter