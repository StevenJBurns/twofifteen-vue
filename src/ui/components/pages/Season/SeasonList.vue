<template>
  <SeasonCard />
  <SeasonCard />
  <SeasonCard />
  <SeasonCard
    v-for="season in seasonStore.list"
    :key="season"
    :season="season"
  />
</template>

<script setup lang="ts">
  import SeasonCard from './SeasonCard.vue';
  import { useSeasonStore } from '@src/external/state/stores/seasonsStore.ts';

  const seasonStore = useSeasonStore();
</script>

<style scoped />
