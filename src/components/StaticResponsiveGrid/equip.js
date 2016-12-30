import { connect } from 'react-redux';

export default connect(
    state => ({ window: state.layout.window }),
);
