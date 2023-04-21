import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      Register <br />
      <br />
      <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/forget">Forget</Link>
    </div>
  );
};

export default Register;
