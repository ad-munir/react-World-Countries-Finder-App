/* eslint-disable react/prop-types */

const LanguageFilter = ({ name, selectedLanguage, setSelectedLanguage }) => {

    const languages = ['All', 'Arabic', 'English', 'Spanish', 'French', 'Portuguese'];

    return (
        <div className="search-group">
            <label htmlFor="dropdown">{name}</label>
            <div className="select-dropdown" id="dropdown" >
                <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    {languages.map(lang => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default LanguageFilter