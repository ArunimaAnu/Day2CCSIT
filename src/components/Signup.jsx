import React from 'react'

const Signup = () => {
  return (
    <div>
          <h2>Sign Up</h2>
          <form action="signup" method="post">
              <label for="firstname">Firstname:</label>
              <input type="text" name="firstname" id="fname" /><br/><br/>
              <label for="lastname">Lastname:</label>
              <input type="text" name="Lastname" id="lname" /><br /><br />
              <label for="phone">Phone Number:</label>
              <input type="text" name="phone" id="phone" /><br /><br />
              <label for="email">Email Id:</label>
              <input type="text" name="email" id="email" /><br /><br />
              <label for="username">Username:</label>
              <input type="text" name="username" id="uname" /><br /><br />
              <label for="password">Password:</label>
              <input type="password" name="password" id="pwd" /><br /><br />
              <button type="submit">Confirm</button><br/>
          </form>
    </div>
  )
}

export default Signup
