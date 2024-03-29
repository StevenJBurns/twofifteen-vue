<template>
  <section>
    <FranchiseList />
  </section>
</template>
<script setup lang="ts">
  import FranchiseList from './FranchiseList/FranchiseList.vue';
</script>
<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
  }
</style>
