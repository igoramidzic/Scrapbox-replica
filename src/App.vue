<template>
  <div id="app">
    <!-- Navbar route-view -->
    <router-view name="navbar"></router-view>

    <!-- Main content route-view -->
    <div class="content-container container-fluid">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      projects: [
        { id: 1, name: 'IgorAmidzic-1' },
        { id: 2, name: 'IgorAmidzic-2' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'public/sass/_variables.sass'
@import 'public/sass/main.sass'

.content-container
  margin: 0px 30px

@media only screen and (max-width: 991px)
  .content-container
    margin: 0px
</style>
