import omit from 'lodash/omit';
import pick from 'lodash/pick';
import keys from 'lodash/keys';
import pickBy from 'lodash/pickBy';
import { NEW } from 'src/actions';

export default (qu, qus, statusFilter, posts) => {
    if (statusFilter === NEW) return omit(posts[qu], keys(qus[qu].posts));
    return pick(posts[qu], keys(pickBy(qus[qu].posts, o => o === statusFilter)));
};
