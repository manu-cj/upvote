<template>

  <h2>{{count}}</h2>
  <button @click="count++">ajouter</button>
  <button @click="count--">retirer</button>


</template>

<script>
export default {
  name: "CounterElement",
  data() {
    return {
      count : 0
    }
  },

}
</script>

<style scoped>

</style>