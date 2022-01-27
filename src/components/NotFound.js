import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{border: "1px solid black", textAlign: "center"}}>
      <h4>Sorry</h4>
      <p>Resource not found 😯😣</p>
      <Link to="/">Back to Home page...</Link>
    </div>
  );
};

export default NotFound;
