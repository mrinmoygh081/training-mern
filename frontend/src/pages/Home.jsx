import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="layer"></div>
      <form>
        <div className="form-header">
          <img src="logo.png" alt="logo" />
          <h1>Welcome To Your Tour Planer!</h1>
          <h3>Enter your credintials to login</h3>
        </div>
        <div className="input-container">
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="input-container">
          <input type="submit" value="Login" />
        </div>
        <div className="link-container">
          {/* <a href="#">Forget password ?</a> */}
          <Link to="/forget">Forget password?</Link>
        </div>
        <div className="link-container">
          {/* <a href="#">Create new Account</a> */}
          <Link to="/register">Create new Account</Link>
        </div>
        <br />
        <br />
        {/* <!-- Footer with copyright notice -->    */}
        <footer className="main-footer">
          &copy; 2023 Your Tour Planer. All Rights Reserved.
        </footer>
      </form>
    </div>
  );
};

export default Home;
