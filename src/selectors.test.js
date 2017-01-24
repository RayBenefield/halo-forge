import { filterByQuStatus } from './selectors';

describe('Filter by Qu & Status', () => {
    it('should grab all posts for a Qu', () => {
        const result = filterByQuStatus(
            'halo',
            { halo: { posts: {} } },
            'NEW',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 12345: {}, 23456: {}, 34567: {} });
    });

    it('should grab unhandled posts for a Qu', () => {
        const result = filterByQuStatus(
            'halo',
            { halo: { posts: { 12345: '' } } },
            'NEW',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 23456: {}, 34567: {} });
    });

    it('should grab unhandled posts for a Qu', () => {
        const result = filterByQuStatus(
            'halo',
            { halo: { posts: { 12345: 'ADDED' } } },
            'ADDED',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 12345: {} });
    });
});
