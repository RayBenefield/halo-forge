import { createSelector } from 'reselect';
import filterByQuStatus from './filter-by-qu-status';
import { getSelectedQu, getQus, getFilter, getItems } from './filters';

export default createSelector(
    [getSelectedQu, getQus, getFilter, getItems],
    filterByQuStatus,
);
