import { useState, useEffect } from 'react'

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [loading, setLoading]  = useState(true);
    const [error, setError]  = useState();
    console.log(stats, loading, error);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError();
            const data = await fetch(url)
            .then(res => res.json())
            .catch(err => {
                setError(err)
            })
            
            if(!data.error) {
                setStats(data);
            } else {
                setStats('');
                setError(data.error);
            }
           
            setLoading(false);
           
        }
        fetchData();
    }, [url]);
    return {
        stats,
        loading,
        error
    }; 
}
