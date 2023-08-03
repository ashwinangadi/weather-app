import { Link, useRouteError } from "react-router-dom";
import { leftArrow } from "../Utility/SVG";

const RouteError = () => {
  const err = useRouteError();
  const { data, status, statusText } = err;
  return (
    <div className="page ">
      <h1 className="heading">
        <Link to="/">
          <span>{leftArrow}</span>
        </Link>
        Weather App
      </h1>
      <hr />
      <div className="errorCenter">
        <p>Try again</p>
        <p style={{ fontSize: "1.5em", margin: "0" }}>{data}</p>
        <h1 style={{ fontSize: "10em", margin: "0", color: "red" }}>
          {status}
        </h1>
        <p style={{ fontSize: "2.5em", margin: "0" }}>{statusText}</p>
      </div>
    </div>
  );
};

export default RouteError;
