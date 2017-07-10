<template lang="html">
  <div class="menu">
    <!-- Menu button -->
    <button class="nav-menu-btn" :class="{ 'active': menuBinary }" @click="menuBinary = !menuBinary">
      <span class="hidden-xs">Menu</span> <span class="fa fa-bars"></span>
    </button>
    <!-- Menu list -->
    <div class="nav-menu-dropdown" v-if="menuBinary">
      <ul class="list">
        <!-- Project list -->
        <router-link tag="li"
                      v-for="project in projectList" :key="project.id"
                      :to="{ name: 'home', params: { project: project.name } }">
                      <a class="nav-link nav-item" :class="{ 'emphasis': project.name == $route.params.project}">{{ project.name }}</a>
        </router-link>
        <!-- Create new project -->
        <li><a class="nav-link nav-item" href="#">Create new project +</a></li>
        <li class="divider"></li>
        <!-- Project settings -->
        <li class="section-header nav-item">Igor Amidzic's project</li>
        <router-link :to="{ name: 'settingsMembers', params: { project: 'igoramidzic' } }" tag="li"><a class="nav-link nav-item">Members (1)</a></router-link>
        <router-link :to="{ name: 'settingsBasic', params: { project: 'igoramidzic' } }" tag="li"><a class="nav-link nav-item">Settings</a></router-link>
        <router-link :to="{ name: 'settingsTheme', params: { project: 'igoramidzic' } }" tag="li"><a class="nav-link nav-item">Theme</a></router-link>
        <router-link :to="{ name: 'settingsNotifications', params: { project: 'igoramidzic' } }" tag="li"><a class="nav-link nav-item">Notifications</a></router-link>
        <li class="divider"></li>
        <!-- Page style -->
        <li class="section-header nav-item">Style</li>
        <li><a class="nav-link emphasis nav-item" href="#">Grid</a></li>
        <li><a class="nav-link nav-item" href="#">List</a></li>
        <li class="divider"></li>
        <!-- User settings -->
        <li class="section-header nav-item">Igor Amidzic</li>
        <router-link :to="{ name: 'settingsProfile' }" tag="li"><a class="nav-link nav-item green-bar">Edit profile</a></router-link>
        <li><a class="nav-link nav-item" href="#">Log out</a></li>
        <li class="divider"></li>
        <!-- About Scrapbox -->
        <li><a class="nav-link nav-item" href="#">About Scrapbox</a></li>
        <li><a class="nav-link nav-item" href="#">Help</a></li>
        <li class="divider"></li>
        <!-- Watch list -->
        <li class="section-header nav-item">Watch List</li>
        <li><a class="nav-link nav-item" href="#">Scrapbox Help</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data: () => {
    return {
      // Menu toggle
      menuBinary: false
    }
  },
  computed: {
    projectList () {
      return this.$store.state.projects.projectList
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
    z-index: 9999
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
