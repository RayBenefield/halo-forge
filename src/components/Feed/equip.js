import _ from 'underscore';
import { connect } from 'react-redux';
import { getVisibleItems } from 'src/selectors';

export default connect(
    (state, ownProps) => ({
        posts: _.sortBy(_.values(getVisibleItems(state)), 'added').reverse(),
        style: _.extend(ownProps.style, { width: 320, height: 120 }),
    }),
);