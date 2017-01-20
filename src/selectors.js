/* eslint-disable import/prefer-default-export */
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import keys from 'lodash/keys';
import { createSelector } from 'reselect';

const getSelectedSource = state => state.selectedSource;
const getSources = state => state.sources;
const getItems = state => state.posts;
const getFilter = state => state.filter;

export const filterBySourceStatus = (source, sources, statusFilter, posts) => {
    if (statusFilter === 'NEW') return omit(posts[source], keys(sources[source].posts));
    return pick(posts[source], keys(pickBy(sources[source].posts, o => o === statusFilter)));
};

export const getVisibleItems = createSelector(
    [getSelectedSource, getSources, getFilter, getItems],
    filterBySourceStatus,
);
