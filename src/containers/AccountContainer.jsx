import { useEffect, useState } from 'react';
import AccountEntityList from '../components/AccountEntityList.jsx';
import config from "../config.js";

export default function AccountContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const basicAuth = 'Basic ' + btoa(`${config.username}:${config.password}`);
        //sending username and password to check authentication and authorization
        fetch(`${config.apiBaseUrl}/account`, {
            headers: {'Authorization': basicAuth}
        })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <AccountEntityList data={data} />;
}
