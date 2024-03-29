<template>
  <h2>VENUES</h2>
  <VTable>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">City</th>
        <th class="text-left">State</th>
        <th class="text-left">Country</th>
        <th class="text-center">Surface</th>
        <th class="text-center">Roof</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="venue in venues" :key="venue.id">
        <td class="text-left">{{ venue.name }}</td>
        <td class="text-left">{{ venue.location.city }}</td>
        <td class="text-left">{{ venue.location.state }}</td>
        <td class="text-left">{{ venue.location.country }}</td>
        <td class="text-center">{{ venue.surfaceType }}</td>
        <td class="text-center">{{ venue.roofType }}</td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { VenueService } from '@src/core/application/usecases/VenueService';

  const venueService = inject<VenueService>('venueService')!;
  const venues = venueService
    .getVenueList()
    .sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    })
    .sort((a, b) => {
      return a.location.country < b.location.country ? -1 : 1;
    });
</script>

<style scoped>
  tbody {
    min-width: 960px;
  }
</style>
