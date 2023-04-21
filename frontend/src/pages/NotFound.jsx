import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404: You're in wrong place Go back to
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
