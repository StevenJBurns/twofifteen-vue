<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
  // import SeasonSelect from '@src/ui/components/common/SeasonSelect.vue';
</script>

<style scoped>
  main {
    flex: 1 0 auto;
    min-width: 20rem;
    max-width: 60rem;
    margin: auto;
    padding: 2rem 0;
  }
</style>
