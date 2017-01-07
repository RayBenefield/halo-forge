import _ from 'underscore';
import { connect } from 'react-redux';
import { getVisibleItems } from '../../selectors';

export default connect(
    (state, ownProps) => ({
        posts: _.sortBy(_.values(getVisibleItems(state)), 'added').reverse(),
        style: _.extend(ownProps.style, state.layout.item),
    }),
);
