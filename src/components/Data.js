import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")//change url for err 
      .then((response) => {
        if (!response.ok) {
          setError("ups!");
          setTimeout(() => {
            setLoading(false)
          }, 1000);
        }
        return response.json();
      })
      .then((rawdata) => {
        setData(rawdata);
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  if (loading) return <p className="text-center">Loading...</p>
  if (error) return (
    <div className="d-grid justify-content-center">
      <div className="alert alert-danger">{error}</div>
    </div>
  )
  return (
    <div className="d-grid justify-content-center bg-dark text-white">
      <h3 className="display-3">Get-Data screen</h3>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <Link to={`/details/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
