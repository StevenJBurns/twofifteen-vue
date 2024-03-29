<template>
  <h2>SEASONS</h2>
  <section>
    <SeasonList />
  </section>
</template>

<script setup lang="ts">
  import SeasonList from './SeasonList.vue';
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
