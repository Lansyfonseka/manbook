<template>
  <div className="login">
        <h1>Login</h1>
        <div className="login__form">          
          <div className="login__form_row">
            <input
              placeholder="Enter email"
              id="email"
              type="text"
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="login__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="login__button" onClick={checkUser}>Login</button>
      </div>
</template>

<script>
import './AuthPage.scss'

export default {
  name: "AuthPage"
}

</script>