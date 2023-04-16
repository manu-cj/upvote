<template>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
    }
  },

  methods: {
    increment() {
      this.$emit('increment');
    },
    decrement() {
      this.$emit('decrement');
    }
  }
}
</script>

<style scoped>

</style>