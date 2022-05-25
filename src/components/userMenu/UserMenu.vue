<template>
  <div 
    class="user-menu">
    <div class="user-menu__item">My collections</div>
    <div class="user-menu__item">Favorites</div>
    <div class="user-menu__item">Setting</div>
    <div class="user-menu__item" @click.stop="logOut">Log out</div>
  </div>
</template>

<script>
import './UserMenu.scss'

export default {
  emits: ['hideMenu'],
  methods: {
    logOut() {
      this.$emit('hideMenu');
      this.$store.commit('logOut');
    }
  }
}
</script>