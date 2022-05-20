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
              v-model="userMail"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="login__form_row">
          <input
              placeholder="Enter password"
              id="password"
              type="password"
              name="password"
              v-model="userPassword"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="login__button" @click="login">Login</button>
      </div>
</template>

<script>
import './AuthPage.scss'
import Axios from 'axios'

export default {
  name: "AuthPage",
  data() {
    return {
      userMail: null,
      userPassword: null
    }
  },
  methods: {
    async login() {
      try {
        await Axios.post('http://localhost:5000/api/login',{
          mail: this.userMail,
          password: this.userPassword
        }).then(data => {
          const user = data.data.user;
          user.login = true;
          this.$store.dispatch('loginUser', user);
        });
        this.$router.push({path: '/'})
      }
      catch (error) {
        console.log(error);
      }      
    }
  }
}

</script>