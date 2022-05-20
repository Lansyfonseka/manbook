<template>
  <header className='header'>
      <router-link :to="{path: '/'}" class="logo"></router-link>
      <div className="search">
        <input placeholder="Search"/>
      </div>
      <div className="authorization" v-if="!USER_INFO.isLogin">
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
      <div 
        className="profile" 
        v-else
        @click="changeMenu"
        @hide-menu="hideMenu"
      >
        <div className="profile__name">{{USER_INFO.name}}</div>
        <img src="https://avatars.githubusercontent.com/u/45271624?v=4" alt="profile" className="profile__photo"/>
        <transition name="fade">
          <UserMenu v-show="showUserMenu" :active="showUserMenu"/>
        </transition>
      </div>
            
    </header>
</template>

<script>
import './Header.scss';
import { mapGetters } from 'vuex';
import UserMenu from '../userMenu/UserMenu';

export default {
  name: "CustomHeader",
  data() {
    return {
      showUserMenu: false
    }
  },
  methods: {
    changeMenu() {
      console.log('change');
      this.showUserMenu = !this.showUserMenu
    },
    hideMenu() {
      console.log('hide')
    }
  },
  computed: {
    ...mapGetters(['USER_INFO'])
  },
  components: {
    UserMenu
  }
}

</script>
