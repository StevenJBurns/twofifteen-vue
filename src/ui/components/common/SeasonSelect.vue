<template>
  <div>
    <VSelect
      label="Season"
      :items="seasonStore.list"
      :model-value="seasonStore.selected"
      variant="outlined"
      @update:model-value="handleSelectChange"
    />
  </div>
</template>
<script setup lang="ts">
  import { useSeasonStore } from '@src/external/state/stores/seasonsStore';

  const seasonStore = useSeasonStore();

  function handleSelectChange(year: number | null) {
    if (year) seasonStore.setSelected(+year);
  }
</script>
<style scoped>
  div {
    max-width: 12rem;
  }
</style>
