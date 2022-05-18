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
    Axios.get('http://localhost:5000/api/users').then( (data) =>{
      console.log(data.data);
    })
  })
} 
}
</script>