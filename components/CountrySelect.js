import { useState, useEffect } from 'react'
import useStats from "../src/useStats";
import Stats from "../components/Stats";

export default function CountrySelector() {
    const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('MX');
    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <select onChange={(e) => {
                setSelectedCountry(e.target.value)
            }}>
                {Object.entries(countries.countries).map(([country, code]) => {
                    return (
                        <option selected={selectedCountry === countries.iso3[code]} key={code} value={countries.iso3[code]}
                        >
                            {country}
                            {countries.code}
                        </option>
                    )
                })}
            </select>
            <h1>{selectedCountry}</h1>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}> </Stats>
        </div>
    );
}