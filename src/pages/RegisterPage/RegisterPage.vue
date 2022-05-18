<template>
  <div className="registration">
        <h1>Registration</h1>
        <div className="registration__form">
          <div className="registration__form_row">
            <input
              placeholder="Enter name"
              id="name"
              type="text"
              name="name"
              v-model="userName"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="registration__form_row">
            <input
              placeholder="Enter email"
              id="email"
              type="text"
              name="email"
              v-model="userMail"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="registration__form_row">
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
        <button className="registration__button" @click="registerUser">
          Register
        </button>
      </div>
</template>

<script>
import './RegisterPage.scss';
import Axios from 'axios'

export default {
  name: "RegisterPage",
  data () {
    return {
      userName: null,
      userMail: null,
      userPassword: null
    }
  },
  methods: {
    async registerUser() {
      await Axios.post('http://localhost:5000/api/register',{
        name: this.userName,
        mail: this.userMail,
        password: this.userPassword
      });
      this.$router.push({path: '/'})
    }
  }
}
</script>
