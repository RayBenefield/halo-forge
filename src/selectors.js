/* eslint-disable import/prefer-default-export */
import pick from 'lodash/pick';
import values from 'lodash/values';
import { createSelector } from 'reselect';

const getItems = state => state.posts;
const getFilter = state => state.filter;

export const getVisibleItems = createSelector(
    [getItems, getFilter],
    (posts, filter) => pick(
        posts,
        values(posts).filter(post => post.status === filter).map(post => post.id),
    ),
);
