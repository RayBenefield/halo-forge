/* eslint-disable import/prefer-default-export */
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import keys from 'lodash/keys';
import { createSelector } from 'reselect';
import { NEW } from 'src/actions';

const getSelectedQu = state => state.selectedQu;
const getQus = state => state.qus;
const getItems = state => state.posts;
const getFilter = state => state.filter;

export const filterByQuStatus = (qu, qus, statusFilter, posts) => {
    if (statusFilter === NEW) return omit(posts[qu], keys(qus[qu].posts));
    return pick(posts[qu], keys(pickBy(qus[qu].posts, o => o === statusFilter)));
};

export const getVisibleItems = createSelector(
    [getSelectedQu, getQus, getFilter, getItems],
    filterByQuStatus,
);
