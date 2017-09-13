import { createSelector } from 'reselect'

const memorySelector = state => state.memory;
const displaySelector = state => state.display;

export const averageSelector = createSelector(
  memorySelector,
  displaySelector,
  (memory, display) => (memory + display)/2,
);

export const sumSelector = createSelector(
  memorySelector,
  displaySelector,
  (memory, display) => (memory + display),
);