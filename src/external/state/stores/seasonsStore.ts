import { defineStore } from 'pinia';
import SeasonsData from '@src/external/json/seasons.json';

export const useSeasonStore = defineStore('seasons', {
  state: () => ({
    list: [...SeasonsData],
    selected: 1973,
  }),
  actions: {
    setSelected(newSeason: number) {
      this.selected = newSeason;
    },
  },
});
