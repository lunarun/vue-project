<template>
  <!-- <button v-on:click="increment">{{ counter }}</button> -->
  <!-- <input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"> -->
  <div>
      <h2>我是子组件的标题</h2>
      <slot>
        只有在没有要分发的内容时才会显示。
      </slot>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment () {
        this.counter += 1
        this.$emit('increments')
      }
    }
  }
</script>

<style>

</style>
