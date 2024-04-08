<template>
  <header-index></header-index>
</template>

<script>

import HeaderIndex from "@/components/header/headerIndex.vue";
export default {
  name: 'App',
  components: {
    HeaderIndex
  }
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
