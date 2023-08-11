/* eslint-disable react/prop-types */

const Filter = ({ name, options }) => {
    return (
        <div className="search-group">
            <label htmlFor="continent-dropdown">{name}</label>
            <div className="select-dropdown" id="continent-dropdown" >
                <select>
                    {options.map( option => {
                        <option key={option} value={option}>{option}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filter