/* eslint-disable react/prop-types */

const DarkLightButton = ({ mode, toggleDarkMode }) => {

    return (
        <button onClick={toggleDarkMode}> {mode ? "light" : "dark"} mode</button>
    )
}

export default DarkLightButton