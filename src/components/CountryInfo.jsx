import { useParams } from "react-router-dom";

function CountryInfo() {
    const { data } = useParams();

    return (
        <div>
            <h1>Other Page</h1>
            <p>Received data: {data}</p>
        </div>
    );
}

export default CountryInfo