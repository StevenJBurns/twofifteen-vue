import { defineStore } from 'pinia';
import { Franchise } from '@src/core/domain/franchise/Franchise';
import FranchiseData from '@src/external/json/franchises.json';

export const useFranchiseStore = defineStore('franchises', {
  state: () => ({
    list: FranchiseData,
    selected: undefined,
  }),
  getters: {
    filteredListBySeason() {},
    uniqueTeamNames() {},
    currentTeamName: state => (franchiseId: string) => {
      const { teams } = state.list.find(f => f.id === franchiseId)!;
      return teams.slice(-1)[0].name;
    },
    franchiseSpan: state => (franchiseId: string) => {
      const { teams } = state.list.find(f => f.id === franchiseId)!;

      return {
        firstSeason: Math.min(...teams.map(t => t.season)),
        lastSeason: Math.max(...teams.map(t => t.season)),
      };
    },
    teams: state => (franchiseId: string) => {
      const f = state.list.find((f: Franchise) => f.id === franchiseId);
      return f?.teams ?? [];
    },
  },
  actions: {
    setSelected(nextFranchiseId: string) {
      console.log({ nextFranchiseId });
    },
  },
});
