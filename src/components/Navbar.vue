<template lang="html">
  <nav class="main-navbar" @click="menuToggle">
    <div class="container-fluid">
      <div class="row">
        <!-- Logo -->
        <div class="nav-section nav-section-logo col-md-3 col-sm-4 col-xs-8">
          <div class="holder">
            <a class="logo-link" href="#">
              <div class="nav-link-holder">
                <img class="nav-logo" src="src/public/img/logo.png" alt="">
                <span class="app-name">Scrapbox</span>
              </div>
            </a>
          </div>
        </div>
        <!-- Search box -->
        <div class="nav-section nav-section-search col-md-6 col-sm-4 hidden-xs">
          <div class="holder">
            <input class="nav-search-box" type="text">
          </div>
        </div>
        <!-- Menu -->
        <div class="nav-section nav-section-menu col-md-3 col-sm-4 col-xs-4">
          <div class="holder">
            <button class="nav-menu-btn" type="button" name="button" @click="menuBinary = !menuBinary"><span class="hidden-xs">Menu</span> <span class="fa fa-bars"></span></button>
            <div class="nav-menu-dropdown" v-if="menuBinary">
              <ul class="list">
                <li><a class="nav-link emphasis nav-item" href="#">Igor Amidzic's project</a></li>
                <li><a class="nav-link nav-item" href="#">Create new project +</a></li>
                <li class="divider"></li>
                <li class="section-header nav-item">Igor Amidzic's project</li>
                <li><a class="nav-link nav-item" href="#">Members (1)</a></li>
                <li><a class="nav-link nav-item" href="#">Settings</a></li>
                <li><a class="nav-link nav-item" href="#">Theme</a></li>
                <li><a class="nav-link nav-item" href="#">Notifications</a></li>
                <li class="divider"></li>
                <li class="section-header nav-item">Style</li>
                <li><a class="nav-link emphasis nav-item" href="#">Grid</a></li>
                <li><a class="nav-link nav-item" href="#">List</a></li>
                <li class="divider"></li>
                <li class="section-header nav-item">Igor Amidzic</li>
                <li><a class="nav-link nav-item" href="#">Edit profile</a></li>
                <li><a class="nav-link nav-item" href="#">Log out</a></li>
                <li class="divider"></li>
                <li><a class="nav-link nav-item" href="#">About Scrapbox</a></li>
                <li><a class="nav-link nav-item" href="#">Help</a></li>
                <li class="divider"></li>
                <li class="section-header nav-item">Watch List</li>
                <li><a class="nav-link nav-item" href="#">Scrapbox Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      menuBinary: false
    }
  },
  methods: {
    menuToggle: () => {
      if (this.menuBinary) {
        this.menuBinary = false
      }
    }
  }
}

</script>

<style lang="sass" scoped>
@import 'src/public/sass/_variables.sass'

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
              margin-left: 10px
              font-size: 20px
              position: relative
              top: 3px
          &:hover
            .app-name
              color: rgb(228, 228, 228)
      .nav-section-search
        .nav-search-box
          height: 34px
          border: none
          width: 100%
          border-radius: 4px
          padding: 0px 5px 0px 10px
          outline: none
          color: $primary-text-color
          background-color: rgba(255, 255, 255, 0.2)
          &:focus
            background-color: #fff
      .nav-section-menu
        text-align: right
        .holder
          height: 100%
          .nav-menu-btn
            height: 100%
            border: none
            background-color: transparent
            outline: none
            .fa-bars
              margin-left: 10px
          &:hover
            color: rgb(228, 228, 228)
          .nav-menu-dropdown
            background-color: white
            color: $primary-text-color
            position: absolute
            right: 0
            width: 300px
            border-radius: 4px
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
              .nav-link
                color: $primary-text-color
                display: block
                text-decoration: none
                &:hover
                  background-color: #f5f5f5
              .section-header
                color: #777
                font-size: 13px

</style>
