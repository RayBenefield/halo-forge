/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getItems = state =>
    state.postsBySource[state.selectedSource].items;
const getFilter = state =>
    state.filter;

export const getVisibleItems = createSelector(
    [getItems, getFilter],
    (items, filter) => items.filter(i => i.status === filter),
);
