/* eslint-disable react/prop-types */

const DarkLightButton = ({ toggleDarkMode }) => {

    return (
        <div>
            {/* <button onClick={toggleDarkMode}> {mode ? "light" : "dark"} mode</button> */}
            <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleDarkMode} />
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
        </div>
    )
}

export default DarkLightButton