import { useEffect, useState } from 'react';
import DepositEntryList from '../components/DepositEntryList.jsx';
import config from '../config.js';

export default function DepositContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${config.apiBaseUrl}/Deposite`)
            .then(res => res.json())
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading deposits...</p>;
    if (error) return <p>Error: {error}</p>;

    return <DepositEntryList data={data} />;
}
