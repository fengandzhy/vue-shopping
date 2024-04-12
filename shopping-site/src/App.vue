<template>
  <header-index></header-index>
  <footer-index></footer-index>
</template>

<script>

import HeaderIndex from "@/components/header/headerIndex.vue";
import FooterIndex from "@/components/footer/footerIndex.vue";
export default {
  name: 'App',
  components: {
    HeaderIndex,
    FooterIndex
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
  //margin-top: 60px;
}
</style>
