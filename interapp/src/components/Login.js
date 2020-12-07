import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import { Link } from "react-router-dom";



function Login(props) {
const handleSignIn = async () => {
   
return "done"
  /*  const isauthenticated = await loginToken.checkIfUserPasswordMatches(
      signInInfo*/
    ;}

return( 
    
    <div>
      <div className="SignIn">
        <div className="signin-logo-name">
          
        </div>
        
        <div className="container-fluid d-flex justify-content-center">
          <div className="signcard">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="inputEmail">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder=" "
                    name="email"
                    onChange={handleSignIn}
                  />
                </div>
                <div className="form group">
                  <label for="inputPassword">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder=" "
                    name="password"
                    onChange={handleSignIn}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    className="btn btn-dark"
                    style={{
                      marginTop: "10px",
                      width: "100px",
                      padding: "8px",
                    }}
                    value="Sign In"
                    onClick={handleSignIn}
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div>
                <Link className="card-footerText" to="/signUp">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
export default Login;

