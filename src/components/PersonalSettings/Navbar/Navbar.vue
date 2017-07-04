<template lang="html">
  <nav class="main-navbar">
    <div class="container-fluid">
      <div class="row">
        <!-- Logo -->
        <div class="nav-section nav-section-logo col-xs-6">
          <div class="holder">
            <router-link :to="{ name: 'home' }">
              <a class="logo-link" href="#">
                <div class="nav-link-holder">
                  <span class="app-name">Scrapbox</span>
                </div>
              </a>
            </router-link>
          </div>
        </div>
        <!-- Menu -->
        <div class="nav-section nav-section-menu col-xs-6">
          <app-menu class="holder"></app-menu>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    appMenu: Menu
  },
  data: () => {
    return {
      
    }
  }
}

</script>

<style lang="sass" scoped>
@import 'public/sass/_variables.sass'

.main-navbar
  background-color: $primary-color2
  color: #fff
  transition: all .25s
  border: none
  margin: 0
  height: 50px
  .container-fluid
    height: 100%
    .row
      height: 100%
      .nav-section
        display: flex
        flex-direction: column
        justify-content: center
        height: 100%
      .nav-section-logo
        .logo-link
          text-decoration: none
          padding: 0px 10px 0px 0px
          .nav-link-holder
            display: inline-block
            .nav-logo
              height: 40px
            .app-name
              color: #fff
              font-size: 20px
              position: relative
          &:hover
            .app-name
              color: rgb(228, 228, 228)
      .nav-section-menu
        text-align: right
        .holder
          height: 100%


</style>
