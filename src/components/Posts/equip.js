import _ from 'underscore';
import { connect } from 'react-redux';
import { getVisibleItems } from '../../selectors';

export default connect(
    (state, ownProps) => ({
        posts: getVisibleItems(state),
        style: _.extend(ownProps.style, state.layout.item),
    }),
);
