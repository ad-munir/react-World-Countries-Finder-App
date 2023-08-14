import { useContext } from "react";
import DarkLightButton from "./DarkLightButton"
import { CountryContext } from "../Contexts/contexts";
import { Link } from "react-router-dom";

const Header = () => {

    const { darkMode, toggleDarkMode } = useContext(CountryContext);

    return (
        <header className={darkMode ? "dark" : ""}>
            <div className="title">
                <Link to='/'>
                    <h1>World Countries </h1>
                </Link>
                <div className="title-underline"></div>
            </div>
            <DarkLightButton toggleDarkMode={toggleDarkMode} />
        </header>
    )
}

export default Header