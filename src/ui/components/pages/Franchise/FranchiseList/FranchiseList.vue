<template>
  <FranchiseCard
    v-for="franchise in franchiseStore.list"
    :key="franchise.id"
    :franchise-id="franchise.id"
  />
</template>

<script setup lang="ts">
  import FranchiseCard from './FranchiseCard.vue';
  import { useFranchiseStore } from '@src/external/state/stores/franchiseStore';

  const franchiseStore = useFranchiseStore();
</script>

<style scoped></style>
