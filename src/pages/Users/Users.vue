<template>
  <div></div>
</template>

<script>
import './Users.scss'
import Axios from 'axios'

export default {
  name: "AllUsers",
  mounted() {
  this.$nextTick(async function () {
    Axios.get('https://manbook-server-v2-nlrk0yi4d-lansyfonseka.vercel.app/api/users').then( (data) =>{
      console.log(data.data);
    })
  })
} 
}
</script>