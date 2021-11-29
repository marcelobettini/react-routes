import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((rawdata) => setData(rawdata))
    );
  }, []);

  return (
    <Fragment>
      <h3 className="display-3">Get-Data screen</h3>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <Link to={`/details/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Data;
