<template>
  <div class="home">
    <home-header></home-header>
    <home-tab></home-tab>
    <home-content></home-content>

    <input type="file" name="">
    <br><br>
    <div class="box">
      <input type="file" id="fileId" @change="handleFileChange" ref="inputer">
      <label for="fileId"></label>
      <i class="iconfont">:)</i>
    </div>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeContent from './HomeContent'
  import HomeTab from './HomeTab'

  export default {
    name: 'home',
    props: {
      values: {
        default: undefined
      }
    },
    data () {
      return {
        file: [],
        errText: ''
      }
    },
    components: {
      HomeHeader,
      HomeContent,
      HomeTab
    },
    methods: {
      handleFileChange (e) {
        let inputDOM = this.$refs.inputer
        this.file = inputDOM.files[0]
        console.log(e.target.value)  // C:\fakepath\73d480adjw1f2clmav19jj20k80rswjf.jpg
        console.log(this.file)
        this.errText = ''
        // let size = Math.floor(this.file.size / 1024)
        this.$emit('input', this.file)
      }
    }
  }
</script>

<style lang="less">

  .box {
      position: relative;
  }
  input {
      position: absolute;
      left: -9999px;
  }
  /* 使label充满整个box*/
  label {
      position: absolute;
      top: 0;left: 0;right: 0;bottom: 0;
      z-index: 10; /* 这个z-index之后说到*/
  }
</style>
