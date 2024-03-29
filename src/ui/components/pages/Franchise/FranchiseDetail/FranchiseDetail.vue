<template>
  <hr />
  <br />
  <h2>Franchise Detail</h2>
  <h5>{{ $route.params.id }}</h5>
  <br />
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-center">Season</th>
        <th class="text-left">Team Name</th>
        <th class="text-left">League</th>
        <th class="text-center">Division</th>
        <th class="text-center">W</th>
        <th class="text-center">L</th>
        <th class="text-center">T</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="team in franchiseStore.teams($route.params.id.toString())"
        :key="team.season"
      >
        <td class="text-center">{{ team.season }}</td>
        <td class="text-left">{{ team.name }}</td>
        <td class="text-left">{{ team.league }}</td>
        <td class="text-center">{{ team.division || '--' }}</td>
        <td class="text-center">{{ team.wins }}</td>
        <td class="text-center">{{ team.lost }}</td>
        <td class="text-center">{{ team.ties }}</td>
      </tr>
    </tbody>
  </VTable>
  <br />
  <svg></svg>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useFranchiseStore } from '@src/external/state/stores/franchiseStore';
  import { useRoute } from 'vue-router';
  import * as D3 from 'd3';

  const franchiseStore = useFranchiseStore();
  const route = useRoute();

  onMounted(() => {
    const winningPercentages = franchiseStore
      .teams(route.params.id.toString())
      .map(team => {
        return {
          season: team.season,
          percent: (team.wins / (team.wins + team.lost)).toFixed(4),
        };
      });

    const chart = D3.select('svg').attr('width', 720).attr('height', 480);
    const g = chart.append('g');

    // const line = D3.line();

    g.append('path')
      .datum(winningPercentages)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5);
    // .attr('d', line);
  });
</script>

<style scoped>
  :root {
    display: flex;
    flex-direction: column;
  }
</style>
