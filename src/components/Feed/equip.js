import values from 'lodash/values';
import assign from 'lodash/assign';
import sortBy from 'lodash/sortBy';
import { connect } from 'react-redux';
import { getVisibleItems } from 'src/selectors';

export default connect(
    (state, ownProps) => ({
        posts: sortBy(values(getVisibleItems(state)), 'added').reverse(),
        style: assign(ownProps.style, { width: 320, height: 120 }),
    }),
);
