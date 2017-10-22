import React from 'react';

const Register = () => {
    return (
        <form action="http://localhost:8080/api/register" method="post">
            <fieldset>
                <label for="userName">User Name:</label>
                <input type="text" placeholder="Enter User Name" name="userName" id="userName"/>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" />
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <input type="submit" value="Register"/>
            </fieldset>
        </form>
    );
}

export default Register;