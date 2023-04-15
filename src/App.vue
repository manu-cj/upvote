<template>
<div id="app">
<!--  <Item-List/>-->
  <ParentComponent/>



</div>

</template>

<script>


// import ItemList from "@/components/Item-List";

import ParentComponent from "@/components/ParentComponent";
export default {
  name: 'App',
  components: {
    ParentComponent,
    // ItemList,


  },


}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
