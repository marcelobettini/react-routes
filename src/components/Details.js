import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; /*permite utilizar el parámetro que viene en la url*/

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
  }, [id]);
  if (loading) return <p className="text-center">Loading...</p>
  return <>

    {!error ?
      <div className="d-grid justify-content-center bg-dark text-white">
        <h3 className="display-3">Details screen</h3>
        <p className="display-6">
          Name: <span className="text-primary display-4">{data.name}</span>
        </p>
        <p className="display-6">
          User: <span className="text-primary display-4">{data.username}</span>
        </p>
        <p className="display-6">
          Email: <span className="text-primary display-4">{data.email}</span>
        </p>
      </div>
      :
      <div className="d-grid justify-content-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    }
  </>
}

export default Details;
