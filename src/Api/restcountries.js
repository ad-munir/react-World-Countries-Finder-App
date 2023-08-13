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
                'languages': country.languages ? Object.values(country.languages) : [], // Convert object values to an array
                'population': country.population,
                'area': country.area,
                'region': country.region,
            }
        });
}