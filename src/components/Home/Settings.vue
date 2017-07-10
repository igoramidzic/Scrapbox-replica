<template lang="html">
  <div class="holder">
    <h1 class="header">Settings for {{ activeProject }}</h1>
    <div class="settings-container">
      <!-- Navigation -->
      <nav>
        <ul class="link-list">
          <router-link class="item"
            v-for="setting in settingsList" key="setting.name"
            :to="{ name: setting.url, params: { project: 'igoramidzic' } }" tag="li">
            <a class="item-link">{{ setting.name }}</a>
          </router-link>
        </ul>
      </nav>
      <!-- Specific settings view -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      settingsList: [
        { name: 'Members', url: 'settingsMembers'},
        { name: 'Settings', url: 'settingsBasic'},
        { name: 'Theme', url: 'settingsTheme'},
        { name: 'Notifications', url: 'settingsNotifications'},
        { name: 'Page Data', url: 'settingsPageData'}
      ]
    }
  },
  computed: {
    activeProject () {
      return this.$store.state.projects.activeProject.name
    }
  }
}
</script>

<style lang="sass" scoped>
.holder
  max-width: 900px
  margin: auto
  .header
    margin: 10px 0px 30px
  .settings-container
    .link-list
      padding: 0px
      margin: 0px
      list-style: none
      .item
        display: inline-block
        padding: 10px 0px
        margin-right: 2px
        box-sizing: border-box
        .item-link
          border-top-right-radius: 3px
          border-top-left-radius: 3px
          padding: 10px 15px
          border: 1px solid transparent
          text-decoration: none
      .active
        background-color: #fff
</style>
