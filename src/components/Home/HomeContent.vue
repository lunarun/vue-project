<template>
  <div>
    <!-- <my-bottom @increments="incrementTotal"></my-bottom> -->
    <!-- <my-bottom @increments="incrementTotal"></my-bottom> -->
    <p>{{total}}</p><br>
    <!-- <custom-input v-bind:value="something" v-on:input="something = arguments[0]"></custom-input> -->

    <input-test v-model="price"></input-test>
    <p>{{price}}</p>

    <h1>我是父组件的标题</h1>

    <!-- eg：1 -->
    <!-- <my-bottom> -->
      <!-- <h1 slot="header">这里可能是一个页面标题</h1>
      <main>
        <p>主要内容的一个段落。</p>
        <p>另一个主要段落。</p>
      </main>
      <p slot="footer">巴拉巴拉巴拉小魔仙</p> -->
      <!-- </my-bottom> -->

      <!-- eg:2 -->
      <!-- <div class="parent">
        <my-bottom>
          <template scope="props">
            <span>hello from parent</span>
            <span>{{ props.text }}</span>
          </template>
        </my-bottom>
      </div> -->

      <!-- 列表组件 -->
      <my-bottom :items="items">
        <template slot="item" scope="props">
          <li>{{props.text}}</li>
        </template>
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
        price: 3,
        items: [{a: 1}, {a: 1}]
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
