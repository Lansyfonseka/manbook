<template>
  <div 
    class="user-menu" 
    :class="{active: active}"
    @click.stop="closeUserMenu"
  >
    <div class="user-menu__item">My collections</div>
    <div class="user-menu__item">Favorites</div>
    <div class="user-menu__item">Setting</div>
    <div class="user-menu__item" @click.stop="logOut">Log out</div>
  </div>
</template>

<script>
import './UserMenu.scss'

export default {
  props: {
    active: Boolean
  },
  emits: ['hideMenu'],
  methods: {
    logOut() {
      this.$store.commit('logOut');
    },    
    closeUserMenu() {
      console.log('hideMenu');
      this.$emit('hideMenu')
    }
  }
}
</script>