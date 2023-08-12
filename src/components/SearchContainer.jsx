/* eslint-disable react/prop-types */
import Filter from "./Filter"
import SearchBar from "./SearchBar"

const SearchContainer = ({ countries, setSearchResult, searchResult, setLoading }) => {

    // Create a Set of unique continents
    const continentsSet = new Set(countries.map((country) => country.region));

    // Create a Set of unique language names
    //const languagesSet = new Set();

    // countries.forEach(country => {
    //     const languages = country.language.split(", ");

    //     languages.forEach(language => {
    //         languagesSet.add(language);
    //     });
    // });

    // Convert Set to an array using spread operator
    const continents = [...continentsSet];
    //const languages = [...languagesSet];


    function Language_Count() {

        const languageCounts = new Map();

        countries.forEach(country => {

            const languages = country.language;

            for (const lang in languages) {

                const languageName = languages[lang];

                if (languageCounts.has(languageName)) {

                    languageCounts.set(languageName, languageCounts.get(languageName) + 1);

                } else {

                    languageCounts.set(languageName, 1);
                }
            }
        });

        let languagesArray = [];
        languageCounts.forEach((count, language) => {
            languagesArray.push(`${language} (${count})`);
        });

        return languagesArray;
    }

    console.log(continents)
    console.log(Language_Count())

    const languages = Language_Count();

    return (
        <div className="search-container">
            <h2>Search for a Country</h2>
            <div className="search-form">

                <SearchBar countries={countries} setSearchResult={setSearchResult} searchResult={searchResult} setLoading={setLoading} />
                <Filter name={"continent"} options={continents} />
                <Filter name={"language"} options={languages} />


                <div className="search-group">
                    <button className="clear-btn">Clear Filters</button>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer