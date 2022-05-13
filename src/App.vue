<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
