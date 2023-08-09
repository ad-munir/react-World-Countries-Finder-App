import { useParams } from "react-router-dom";

function CountryInfo() {
    const { data } = useParams();
    
  const decodedData = decodeURIComponent(data);
  const country = JSON.parse(decodedData);

    console.log(country)
    return (
        <div>
            <h1>Other Page</h1>
            <p>Received data: {country.name}</p>
        </div>
    );
}

export default CountryInfo