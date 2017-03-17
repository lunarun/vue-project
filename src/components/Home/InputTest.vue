<template>
  <div>
    $<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"/>
    <p>{{transfer}}</p>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        transfer: ''
      }
    },
    props: ['value'],
    methods: {
      updateValue (value) {
        let format = value.trim()
        if (format !== value) {
          this.$refs.input.value = format
        }
        this.$emit('input', Number(format))
      }
    }
  }
</script>

<style>

</style>
