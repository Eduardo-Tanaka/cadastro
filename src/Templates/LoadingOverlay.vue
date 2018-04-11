<template>
	<loading :show="show" overlay-class="loading-theme-dark" loader-class="loading-overlay-content" :style="style">
		<div slot="loading-text">
			<vue-particles color="#dedede" v-if="show2"></vue-particles>
      <div>Carregando...</div>
		</div>
		<div slot="loading-spinner" style="margin-top:20px">
			<ball-beat-loader v-if="icon === 1"></ball-beat-loader>
			<ball-grid-beat-loader v-else-if="icon === 2"></ball-grid-beat-loader>
			<ball-pulse-loader v-else-if="icon === 3"></ball-pulse-loader>
			<ball-scale-ripple-loader v-else-if="icon === 4"></ball-scale-ripple-loader>
			<ball-zig-zag-deflect-loader v-else-if="icon === 5"></ball-zig-zag-deflect-loader>
			<line-scale-pulse-out-rapid-loader v-else-if="icon === 6"></line-scale-pulse-out-rapid-loader>
			<pacman-loader v-else-if="icon === 7"></pacman-loader>
			<ball-clip-rotate-multiple-loader v-else-if="icon === 8"></ball-clip-rotate-multiple-loader>
			<ball-grid-pulse-loader v-else-if="icon === 9"></ball-grid-pulse-loader>
			<ball-rotate-loader v-else-if="icon === 10"></ball-rotate-loader>
			<ball-scale-loader v-else-if="icon === 11"></ball-scale-loader>
			<ball-zig-zag-loader v-else-if="icon === 12"></ball-zig-zag-loader>
			<line-scale-pulse-out-loader v-else-if="icon === 13"></line-scale-pulse-out-loader>
			<semi-circle-spin-loader v-else-if="icon === 14"></semi-circle-spin-loader>
			<ball-clip-rotate-pulse-loader v-else-if="icon === 15"></ball-clip-rotate-pulse-loader>
			<ball-pulse-rise-loader v-else-if="icon === 16"></ball-pulse-rise-loader>
			<ball-scale-multiple-loader v-else-if="icon === 17"></ball-scale-multiple-loader>
			<ball-spin-fade-loader v-else-if="icon === 18"></ball-spin-fade-loader>
			<cube-transition-loader v-else-if="icon === 19"></cube-transition-loader>
			<line-scale-loader v-else-if="icon === 20"></line-scale-loader>
			<square-spin-loader v-else-if="icon === 21"></square-spin-loader>
			<ball-clip-rotate-loader v-else-if="icon === 22"></ball-clip-rotate-loader>
			<ball-pulse-sync-loader v-else-if="icon === 23"></ball-pulse-sync-loader>
			<ball-scale-ripple-multiple-loader v-else-if="icon === 24"></ball-scale-ripple-multiple-loader>
			<ball-triangle-path-loader v-else-if="icon === 25"></ball-triangle-path-loader>
			<line-scale-party-loader v-else-if="icon === 26"></line-scale-party-loader>
			<line-spin-fade-loader v-else-if="icon === 27"></line-spin-fade-loader>
			<triangle-skew-spin-loader v-else></triangle-skew-spin-loader>
		</div>
	</loading>
</template>

<script>
import Loading from 'vue-full-loading'

export default {
  name: 'LoadingOverlay',
  components: {
    'loading': Loading
  },
  data () {
    return {
      style: '',
      icon: 0,
      show2: false
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  updated () {
    this.getStyle()
  },
  mounted () {
    setTimeout(() => { this.show2 = true }, 100)
    window.addEventListener('resize', this.getStyle)
    this.icon = Math.floor(Math.random() * (27 + 1)) // número entre 0 e 27
  },
  methods: {
    getStyle () {
      this.style = `height:${this.$parent.$el.clientHeight}px;width:${this.$parent.$el.clientWidth}px`
    }
  },
  beforeDestroy () {
    // this.show2 = false
    window.removeEventListener('resize', this.getStyle)
  }
}
</script>

<style>
#particles-js { position: absolute; background-size: cover; top: 0; bottom: 0; left: 0; right: 0; overflow-y: hidden; z-index: 0; }
</style>
