import { useEffect, useState } from 'react';
import PaymentEntryList from '../components/PaymentEntryList';
import config from "../config.js";

export default function PaymentContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/Payment`)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <PaymentEntryList data={data} />;
}