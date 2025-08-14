interface CountryProps {

    countryName: string;
    region: string;
    subregion: string;
    population: string;
    flagUrl: string;
}

export default function Output({ countryName, region, subregion, population, flagUrl }: CountryProps) {
    return (<div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
        <p><strong>Name:</strong> {countryName}</p>
        <p><strong>Subregion:</strong> {subregion}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Population:</strong> {population}</p>
        <img src={flagUrl} alt={`Flag of ${countryName}`} width="150" />
    </div>)
}