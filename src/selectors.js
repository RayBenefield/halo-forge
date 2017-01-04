/* eslint-disable import/prefer-default-export */
import _ from 'underscore';
import { createSelector } from 'reselect';

const getItems = state => state.posts;
const getFilter = state => state.filter;

export const getVisibleItems = createSelector(
    [getItems, getFilter],
    (posts, filter) => _.pick(
        posts,
        _.values(posts).filter(post => post.status === filter).map(post => post.id),
    ),
);
