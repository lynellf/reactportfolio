import React from 'react';

const Login = () => {
  return(
    <div className="wrapper">
      <form className="login-fieldset">
        <fieldset className="welcome">
          <legend className="">Hello Ezell. Please sign-in.</legend>
            <label for="username">Username: </label>
            <input type="text"
            name="username"
            placeholder="Enter Username"
            className="login-field form-control input-hg"
            id="username"/>
            <label for="#password">Password: </label>
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="login-field form-control input-hg"/>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
