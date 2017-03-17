<template>
  <div>
    <!-- <my-bottom @increments="incrementTotal"></my-bottom> -->
    <!-- <my-bottom @increments="incrementTotal"></my-bottom> -->
    <p>{{total}}</p><br>
    <!-- <custom-input v-bind:value="something" v-on:input="something = arguments[0]"></custom-input> -->

    <input-test v-model="price"></input-test>
    <p>{{price}}</p>

    <h1>我是父组件的标题</h1>
    <my-bottom>
     <!--  <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p> -->
    </my-bottom>
  </div>
</template>

<script>
  import MyBottom from './MyBottom'
  import InputTest from './InputTest'

  export default {
    data () {
      return {
        total: 0,
        price: 3
      }
    },
    methods: {
      incrementTotal () {
        this.total += 1
      }
    },
    components: {MyBottom, InputTest}
  }
</script>

<style>


</style>
