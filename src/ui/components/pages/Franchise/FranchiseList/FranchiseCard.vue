<template>
  <article>
    <VCard
      style="margin: auto 0.75rem; padding-bottom: 1rem; min-width: 16rem"
      :href="`/franchise/${franchiseId}`"
    >
      <VCardTitle>
        {{ teamName }}
      </VCardTitle>
      <VCardSubtitle>
        {{ franchiseSpan.firstSeason }} - {{ franchiseSpan.lastSeason }}
      </VCardSubtitle>
    </VCard>
  </article>
</template>

<script setup lang="ts">
  import { toRefs, computed } from 'vue';
  import { useFranchiseStore } from '@src/external/state/stores/franchiseStore.ts';

  const props = defineProps<{ franchiseId: string }>();

  const { franchiseId } = toRefs(props);
  const franchiseStore = useFranchiseStore();

  const teamName = computed(() =>
    franchiseStore.currentTeamName(franchiseId.value),
  );

  const franchiseSpan = computed(() =>
    franchiseStore.franchiseSpan(franchiseId.value),
  );
</script>

<style scoped>
  article {
    margin: 0.5rem 0;
    min-width: 16rem;
    max-height: 8rem;
  }
</style>
