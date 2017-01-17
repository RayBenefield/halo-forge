/* eslint-disable import/prefer-default-export */
import map from 'lodash/map';
import pick from 'lodash/pick';
import values from 'lodash/values';
import filter from 'lodash/filter';
import { createSelector } from 'reselect';

const getItems = state => state.posts;
const getFilter = state => state.filter;

export const getVisibleItems = createSelector(
    [getItems, getFilter],
    (posts, statusFilter) => pick(
        posts,
        map(
            filter(
                values(posts),
                ['status', statusFilter],
            ),
            'id',
        ),
    ),
);
