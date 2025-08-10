import { useEffect, useState } from "react";
import CustomerList from "../components/CustomerEntityList.jsx";
import config from "../config.js";

export default function CustomerListContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCustomers() {
            try {
                const res = await fetch(`${config.apiBaseUrl}/Customer`);
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCustomers();
    }, []);

    if (loading) return <p>Loading customers...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return <CustomerList data={data} />;
}
