<template>
  <header>
    <h2>TwoFifteen</h2>
    <h1>&#9776;</h1>
    <AppNav />
  </header>
</template>

<script setup lang="ts">
  import AppNav from './AppNav.vue';
</script>

<style scoped>
  header {
    padding: 2rem;
    background-color: #aaa;
    container-type: inline-size;
  }

  @container (min-width: 700px) {
    h1 {
      display: none;
    }
  }
</style>
