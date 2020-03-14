import { useState, useEffect } from 'react'
import useStats from "../src/useStats";

export default function Stats() {
    const stats = useStats('https://covid19.mathdro.id/api');
    if(!stats) return <p>Loading...</p>
    console.log(stats);
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