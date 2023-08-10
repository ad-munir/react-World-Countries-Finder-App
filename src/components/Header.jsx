import { useContext } from "react";
import DarkLightButton from "./DarkLightButton"
import { CountryContext } from "../Contexts/CountryContext";

const Header = () => {

    const { darkMode, toggleDarkMode } = useContext(CountryContext);

    return (
        <header >
            <div className="title">
                <h1>World Countries </h1>
                <div className="title-underline"></div>
            </div>
            <DarkLightButton toggleDarkMode={toggleDarkMode} />
        </header>
    )
}

export default Header