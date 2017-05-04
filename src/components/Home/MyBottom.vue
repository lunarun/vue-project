<template>
  <!-- <button v-on:click="increment">{{ counter }}</button>
  <input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"> -->
  <div class="child">
      <!-- <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer> -->
      <slot text="hello from child"></slot>

      <ul>
        <slot name="item" v-for="item in items" :text="item.message"></slot>
      </ul>
</div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0,
        items: [{message: 'Foo'}, {message: 'Bar'}]
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
