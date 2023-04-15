<template>
<div>
  <ul v-for="item in items" :key="item.id">
    <li>{{item.name}}</li>
    <li> Quantité : {{item.valor}} <ChildComponent @increment="handleIncrement(item.id)" @decrement="handleDecrement(item.id)"></ChildComponent></li>
  </ul>
</div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";

export default {
  name: "ParentComponent",
  emits : ["increment", "decrement"],
  components: {
    ChildComponent
  },

  data() {
    return {
      items: [
        {id: 0, name: 'Item 1', valor: 10},
        {id: 1, name: 'Item 2', valor: 12},
        {id: 2, name: 'Item 3', valor: 8},
      ],
    }
  },

  methods: {
    handleIncrement(id) {
      this.items[id].valor++
    },
    handleDecrement(id) {
      this.items[id].valor--
    }
  }
}
</script>

<style scoped>

</style>