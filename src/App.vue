<template>
  <div id="app">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  components: {
    appNavbar: Navbar
  }
}
</script>

<style lang="sass">
@import 'src/public/sass/_variables.sass'
@import 'src/public/sass/main.sass'
</style>
