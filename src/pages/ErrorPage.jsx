import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/" style={{ fontSize: "2rem" }}>
        Get Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
