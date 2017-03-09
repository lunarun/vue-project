<template>
  <div class="home">
    <home-header></home-header>
    <home-tab></home-tab>
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeContent from './HomeContent'
  import HomeTab from './HomeTab'

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      HomeHeader,
      HomeContent,
      HomeTab
    }
  }
</script>

<style>

</style>
