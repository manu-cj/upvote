<template>
  <v-app>
    <v-main>
      <div id="menu">
        <v-tab style="background-color: teal; margin: 2px">
          <router-link to="/" style="text-decoration-line: none; color: azure">Home</router-link>
        </v-tab>

        <v-tab style="background-color: teal; margin: 2px">
          <router-link to="/login" style="text-decoration-line: none; color: azure">Login</router-link>
        </v-tab>

        <v-tab style="background-color: teal; margin: 2px">
          <router-link to="/item-list" style="text-decoration-line: none; color: azure">Item List</router-link>
        </v-tab>

        <v-tab style="background-color: teal; margin: 2px">
          <router-link to="/about" style="text-decoration-line: none; color: azure">About</router-link>
        </v-tab>
        <router-view/>
      </div>

    </v-main>
  </v-app>

</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {}
}
</script>
<style>
router-link {
  text-decoration-line: none;
  color: azure;
}

v-tab {
  background-color: teal;
}

</style>
