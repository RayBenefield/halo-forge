import { connect } from 'react-redux';

export default connect(
    ({ posts }) => ({
        posts,
        isFetching: true,
        lastUpdated: new Date(),
    }),
);
