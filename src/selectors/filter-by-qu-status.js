import map from 'lodash/map';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import keys from 'lodash/keys';
import pickBy from 'lodash/pickBy';
import reduce from 'lodash/reduce';
import extend from 'lodash/extend';
import mapKeys from 'lodash/mapKeys';
import { NEW } from 'src/actions';

export default (qu, qus, statusFilter, posts) => {
    const sources = qus[qu].sources;
    if (statusFilter === NEW) {
        return reduce(
            map(
                sources,
                source => mapKeys(
                    omit(
                        posts[source.prefix],
                        keys(qus[qu].posts[source.prefix])
                    ),
                    (value, key) => `${source.prefix}::${key}`,
                ),
            )
        , extend);
    }

    return reduce(map(sources, source => mapKeys(
        pick(
            posts[source.prefix],
            keys(
                pickBy(
                    qus[qu].posts[source.prefix],
                    o => o === statusFilter
                )
            )
        ),
        (value, key) => `${source.prefix}::${key}`,
    )), extend);
};
