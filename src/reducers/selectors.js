import { createSelector } from 'reselect';

export const getShoes = (state) => state.shoes;

export const getShoeById = createSelector(
  getShoes,
  (_, { row, column } = {}) => `${row}${column}`,
  (shoes = {}, id = '') => shoes[id] || { style: '', brand: '', size: '', upc: '' },
);
