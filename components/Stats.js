import { useState, useEffect } from 'react'
import useStats from "../src/useStats";

export default function Stats({url}) {
    const {stats, loading, error} = useStats(url);
    // console.log(stats, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}...</p>;
    return (
        <div>
            <div>
                <h3>Confirmados</h3>
                <p>{stats.confirmed.value}</p>
            </div>
            <div>
                <h3>Muertos</h3>
                <p>{stats.deaths.value}</p>
            </div>
            <div>
                <h3>Curados</h3>
                <p>{stats.recovered.value}</p>
            </div>
        </div>
    );
}