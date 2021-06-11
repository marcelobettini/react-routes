import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; /*permite utilizar el parámetro que viene en la url*/

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError("ups!");
        }
        return response.json();
      })
      .then((rawdata) => {
        setData(rawdata);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]); //Si no se pasa el array (vacío o con id), entra en loop

  return (
    <Fragment>
      <p className="display-6">
        Name: <span className="display-4">{data.name}</span>
      </p>
      <p className="display-6">
        User: <span className="display-4">{data.username}</span>
      </p>
      <p className="display-6">
        Email: <span className="display-4">{data.email}</span>
      </p>
      <div className="d-grid">
        {error != null ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <div></div>
        )}
      </div>
    </Fragment>
  );
};

export default Details;
