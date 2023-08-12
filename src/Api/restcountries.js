const url = 'https://restcountries.com/v3.1/all';


export async function fetchCountries() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return convert(result);
    } catch (error) {
        console.error(error);
        return [];
    }
}

function convert(json) {
    return json
        .filter(country => country.name.common !== "Western Sahara" && country.name.common !== "Israel")
        .map(country => {
            return {
                'name': country.name.common,
                'code': country.cca2,
                'flag': country.flags.png,
                'capital': country.capital,
                'language': country.languages,
                'population': country.population,
                'area': country.area,
                'region': country.region,
            }
        });
}