<template>
  <div class="home">
    <home-header></home-header>
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeContent from './HomeContent'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      HomeHeader,
      HomeContent
    }
  }
</script>

<style>

</style>
