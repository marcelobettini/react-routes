import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Resource not found 😯😣</p>
      <Link to="/">Back to Home page...</Link>
    </div>
  );
};

export default NotFound;
