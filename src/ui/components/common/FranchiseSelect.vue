<template>
  <select
    id="franchise-select"
    v-model="franchiseStore.selected"
    @change="handleSelectChange($event.target!)"
  >
    <option
      v-for="franchise in franchiseStore.list"
      :key="franchise.id"
      :value="franchise.id"
    >
      {{ franchise.id }}
    </option>
  </select>
</template>

<script setup lang="ts">
  import { useFranchiseStore } from '@src/external/state/stores/franchiseStore';

  const franchiseStore = useFranchiseStore();

  function handleSelectChange(target: EventTarget) {
    if (target)
      franchiseStore.setSelected(
        target as unknown as HTMLSelectElement['value'],
      );
  }
</script>

<style scoped>
  select {
    max-width: 18rem;
    height: 1.5rem;
  }
</style>
