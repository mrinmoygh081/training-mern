import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      Register
      <Link to="/">Home</Link>
      <Link to="/forget">Forget</Link>
    </div>
  );
};

export default Register;
