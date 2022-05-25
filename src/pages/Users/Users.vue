<template>
  <div></div>
</template>

<script>
import './Users.scss'
import Axios from 'axios'

export default {
  name: "AllUsers",
  mounted() {
    const token = this.$store.getters.USER_TOKEN;
    this.$nextTick(async function () {
      Axios.get('http://localhost:5000/api/users', {
        headers: {
          authorization: token ? "Bearer "+token : ""
        }
      }).then( (data) =>{
        console.log(data.data);
      })
    })
  } 
}
</script>