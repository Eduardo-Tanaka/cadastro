<template>
  <div id="app">
    <div :class="[isLogged ? 'wrapper' : '']">
      <va-navibar :isLogged="isLogged"></va-navibar>
      <va-slider :slideMenuItems="menuItems" :isLogged="isLogged"></va-slider>
      <va-content-wrap></va-content-wrap>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import slideMenuItems from './menus/slideMenuItems.js'
// import slideMenuItems2 from './menus/slideMenuItems2.js'

export default {
  name: 'app',
  data () {
    return {
      menuItems: slideMenuItems,
      isLogged: JSON.parse(localStorage.getItem('isLogged'))
    }
  },
  created () {
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      console.log(to)
      console.log(from)
      // this.isLogged = true
      // this.menuItems = slideMenuItems2
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap
  }
}
</script>

<style>

</style>
