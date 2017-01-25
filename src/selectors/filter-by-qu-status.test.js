import filterByQuStatus from './filter-by-qu-status';

describe('Filter by Qu & Status', () => {
    it('should grab all posts for a Qu', () => {
        const result = filterByQuStatus(
            'haloQu',
            { haloQu: { sources: ['halo'], posts: { halo: {} } } },
            'NEW',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 'halo::12345': {}, 'halo::23456': {}, 'halo::34567': {} });
    });

    it('should grab unhandled posts for a Qu', () => {
        const result = filterByQuStatus(
            'haloQu',
            { haloQu: { sources: ['halo'], posts: { halo: { 12345: '' } } } },
            'NEW',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 'halo::23456': {}, 'halo::34567': {} });
    });

    it('should grab unhandled posts for a Qu', () => {
        const result = filterByQuStatus(
            'haloQu',
            { haloQu: { sources: ['halo'], posts: { halo: { 12345: 'ADDED' } } } },
            'ADDED',
            { halo: { 12345: {}, 23456: {}, 34567: {} } },
        );

        expect(result).toEqual({ 'halo::12345': {} });
    });

    it('should grab posts from multiple sources', () => {
        const result = filterByQuStatus(
            'haloQu',
            { haloQu: { sources: ['halo', 'forge'], posts: { halo: {}, forge: {} } } },
            'NEW',
            { halo: { 12345: {} }, forge: { 23456: {} } },
        );

        expect(result).toEqual({ 'halo::12345': {}, 'forge::23456': {} });
    });
});
