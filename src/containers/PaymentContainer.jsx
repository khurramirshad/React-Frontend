import { useEffect, useState } from 'react';
import PaymentEntryList from '../components/PaymentEntryList';
import config from "../config.js";

export default function PaymentContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const basicAuth = 'Basic ' + btoa(`${config.username}:${config.password}`);

    fetch(`${config.apiBaseUrl}/payment`, {
      headers: { 'Authorization': basicAuth }
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

  return <PaymentEntryList data={data} />;
}
