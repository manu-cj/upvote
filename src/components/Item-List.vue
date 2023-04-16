<template>
  <h2>Item List</h2>
  <div id="items">
    <div class="item" v-for="item in items"
         :key="item.id">
      <v-card :title="item.name" :text="'Quantités : ' + item.valor" variant="tonal" style="border: #399b84 3px solid;">
        <v-card-actions>
          <v-btn variant="tonal">
            <button @click="item.valor++">ajouter</button>
          </v-btn>

          <v-btn variant="outlined">
            <button @click="item.valor--">retirer</button>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
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
#items {
  width:40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
}

#item v-card {

}
</style>