/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getItems = state =>
    state.postsBySource[state.selectedSource].items;

export const getVisibleItems = createSelector(
    [getItems],
    items => items,
);
