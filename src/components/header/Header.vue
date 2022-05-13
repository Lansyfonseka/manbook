<template>
  <header className='header'>
      <router-link :to="{path: '/'}" class="logo"></router-link>
      <div className="search">
        <input placeholder="Search"/>
      </div>
      <div className="authorization">
        <router-link :to="{path: '/users'}" class="authorization__login">
          Users
        </router-link>
        <router-link :to="{path: '/login'}" class="authorization__login">
          Sign in
        </router-link>
        <router-link :to="{path: '/register'}" class="authorization__register">
          Sign up
        </router-link>
      </div>
      <div className="profile">
        <div className="profile__name">Ryabtsev Egor</div>
        <img src="https://avatars.githubusercontent.com/u/45271624?v=4" alt="profile" className="profile__photo"/>
      </div>
    </header>
</template>

<script>
import './Header.scss';

export default {
  name: "CustomHeader"
}

</script>
