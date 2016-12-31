import { connect } from 'react-redux';

export default connect(
    ({ selectedSource, postsBySource }) => {
        const {
            isFetching,
            items: posts,
        } = postsBySource[selectedSource] || {
            isFetching: true,
            items: [],
        };

        return {
            posts,
            isFetching,
        };
    },
);
