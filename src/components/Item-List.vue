<template>
  <div>
    <h2>Item List</h2>
    <ul>
     <li v-for="item in items" :key="item.id">{{ item.name }} <CounterElement/></li>
    </ul>
  </div>

</template>

<script>
import CounterElement from "@/components/CounterElement";

export default {
  name: "Item-List",
    data() {
      return {
        items: [
          {id: 1, name: 'Item 1'},
          {id: 2, name: 'Item 2'},
          {id: 3, name: 'Item 3'},
        ],
      }
    },

  components: {
    CounterElement,
  }

}
</script>

<style scoped>

</style>