<template>
  <article>
    <VCard
      v-show="typeof season === 'number'"
      class="d-flex align-center justify-center"
    >
      {{ season }}
    </VCard>
  </article>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue';

  const props = defineProps<{ season?: number }>();
  const { season } = toRefs(props);
</script>

<style scoped>
  article {
    margin: 0.125rem;
  }

  .v-card {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  }
</style>
