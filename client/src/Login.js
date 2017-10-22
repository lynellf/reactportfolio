import React from 'react';

const Login = () => {

  return(
    <div className="wrapper">
      <form className="login-fieldset" method="post" action="http://localhost:3001/api/login">
        <fieldset className="welcome">
          <legend className="">Hello Ezell. Please sign-in.</legend>
            <label for="username">Username: </label>
            <input type="text"
            name="userName"
            placeholder="Enter Username"
            className="login-field form-control input-hg"
            id="userName"/>
            <label for="#password">Password: </label>
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="login-field form-control input-hg"/>
        </fieldset>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;
