<template>
  <div>
    <h2>Item List</h2>
    <ul v-for="item in items" :key="item.id">
      <li>{{ item.name }}</li>

      <li>Quantités : {{ item.valor }}
        <button @click="item.valor++">ajouter</button>
        <button @click="item.valor--">retirer</button>
      </li>
    </ul>
  </div>
  <br><br>
  <div>
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id"> {{user.name}}</li>
    </ul>
  </div>

</template>

<script>


export default {
  name: "Item-List",
  data() {
    return {
      items: [
        {id: 1, name: 'Item 1', valor: 10},
        {id: 2, name: 'Item 2', valor: 12},
        {id: 3, name: 'Item 3', valor: 8},
      ],
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },

}
</script>

<style scoped>

</style>