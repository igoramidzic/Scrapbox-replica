<template lang="html">
  <div class="menu">
    <!-- Menu button -->
    <button class="nav-menu-btn" :class="{ 'active': menuBinary }" @click="menuBinary = !menuBinary">
      <span class="hidden-xs">Igor Amidzic</span> <span class="fa fa-bars"></span>
    </button>
    <!-- Menu list -->
    <div class="nav-menu-dropdown" v-if="menuBinary">
      <ul class="list">
        <router-link :to="{ name: 'settingsProfile' }" tag="li"><a class="nav-link nav-item">Settings</a></router-link>
        <li><a class="nav-link nav-item" href="#">Log out</a></li>
        <li class="divider"></li>
        <li><a class="nav-link nav-item" href="#">About Scrapbox</a></li>
        <li><a class="nav-link nav-item" href="#">Help</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      menuBinary: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'public/sass/_variables.sass'

.menu
  .nav-menu-btn
    height: 100%
    border: none
    background-color: transparent
    outline: none
    padding: 0px 15px
    .fa-bars
      margin-left: 10px
    &:hover
      color: rgb(228, 228, 228)
  .active
    background-color: #2e323b
  .nav-menu-dropdown
    background-color: white
    color: $primary-text-color
    position: absolute
    right: 15px
    min-width: 160px
    border-bottom-right-radius: 4px
    border-bottom-left-radius: 4px
    border: 1px solid rgba(0,0,0,0.15)
    box-shadow: 0 6px 12px rgba(0,0,0,0.175)
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175)
    .list
      text-align: left
      list-style-type: none
      padding: 5px 0px
      margin: 0px
      .nav-item
        padding: 3px 20px
      .divider
        height: 1px
        width: 100%
        background-color: #e5e5e5
        margin: 9px 0px
      .emphasis
        color: $primary-color1 !important
      .green-bar
        box-shadow: 2px 0 0 0 #41bf8b inset
      .nav-link
        color: $primary-text-color
        display: block
        text-decoration: none
        &:hover
          background-color: #f5f5f5
      .section-header
        color: #777
        font-size: 12px
</style>
