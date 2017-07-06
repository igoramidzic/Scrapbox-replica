<template>
  <div class="container-fluid">
    <div class="row">
      <div class="row-container new-page-container col-sm-4 col-xs-12 col-sm-offset-4">
        <router-link :to="{ name: 'newPage', params: { project: 'igoramidzic' } }">
          <!-- New page button -->
          <button class="new-btn nav-link nav-item">
            <!-- SVG -->
            <svg viewBox="0 0 25 25"><path class="horizontal-line" d="M24.0356859,12.1031225 C24.0356859,13.264645 23.1517375,14.206245 22.0277581,14.206245 L2.00792777,14.206245 C0.898979883,14.206245 0,13.2727429 0,12.1031225 L0,12.1031225 C0,10.9416 0.883948352,10 2.00792777,10 L22.0277581,10 C23.136706,10 24.0356859,10.9335021 24.0356859,12.1031225 L24.0356859,12.1031225" fill="#14605F"></path><path class="vertilcal-line" d="M14.206245,2.00792777 L14.206245,22.0277581 C14.206245,23.136706 13.2727429,24.0356859 12.1031225,24.0356859 C10.9416,24.0356859 10,23.1373258 10,22.0277581 L10,2.00792777 C10,0.898979883 10.9335021,0 12.1031225,0 C13.264645,0 14.206245,0.898360024 14.206245,2.00792777 L14.206245,2.00792777 Z" fill="#42C48D"></path></svg>
          </button>
        </router-link>
      </div>
      <div class="row-container sort-by-container col-sm-4 col-xs-12">
        <!-- Sort by Button -->
        <button class="sort-by-btn" :class="{ 'active': sortBy.sortByBinary }" @click="sortBy.sortByBinary = !sortBy.sortByBinary">
          {{ sortBy.sortByActive }} <i class="fa fa-caret-down"></i>
        </button>
        <!-- Menu list -->
        <div class="nav-menu-dropdown" v-if="sortBy.sortByBinary">
          <ul class="list">
            <li class="section-header nav-item">Sort by</li>
            <li><a class="nav-link nav-item"
                  :class="{ 'emphasis': item === sortBy.sortByActive }"
                  v-for="item in sortBy.sortBy"
                  @click="sortBy.sortByActive = item">{{ item }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortBy: {
        sortByBinary: false,
        sortBy: [
          'Date modified',
          'Date created',
          'Date last visited',
          'Trending',
          'Most popular',
          'Most linked',
          'Title',
          'Random (Not working)'
        ],
        sortByActive: 'Date modified'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'public/sass/_variables.sass'
@import 'public/sass/main.sass'

.container-fluid
  .row-container
  .new-page-container
    padding: 0px 5px
    text-align: center
    .new-btn
      border-radius: 3px
      background-color: #fff
      border: none
      height: 38px
      width: 38px
      box-shadow: 0 2px 0 rgba(0,0,0,0.13)
      outline: none
      &:hover
        background-color: #f2f2f2
      svg
        margin-top: 6px
        width: 26px
        height: 26px
  .sort-by-container
    padding: 10px 5px 0px 5px
    text-align: right
    .sort-by-btn
      height: 100%
      border: none
      background-color: transparent
      outline: none
      padding: 3px 10px
      color: #848484
      border-radius: 3px
      .fa-bars
        margin-left: 10px
      &:hover
        background-color: rgba(#858585, 0.3)
    .active
      background-color: rgba(#858585, 0.3)
    .nav-menu-dropdown
      background-color: white
      color: $primary-text-color
      position: absolute
      right: 5px
      width: 185px
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
          cursor: pointer
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
          font-size: 12px
</style>
