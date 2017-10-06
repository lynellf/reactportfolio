import React from 'react';

const Login = () => {
  return(
    <form>
      <fieldset>
      <legend>Hello Ezell. Please sign-in.</legend>
      Username: <input type="text"
      name="username"
      placeholder="Enter Username"
      className="login-field"/>
      Password: <input
      type="password"
      name="password"
      id="password"
      placeholder="Enter password"
      className="login-field"/>
      </fieldset>
    </form>
  );
}

export default Login;
