<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
