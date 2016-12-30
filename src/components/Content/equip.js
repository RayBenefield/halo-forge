import { connect } from 'react-redux';

export default connect(
    ({ selectedSubreddit, postsBySubreddit }) => {
        const {
            isFetching,
            items: posts,
        } = postsBySubreddit[selectedSubreddit] || {
            isFetching: true,
            items: [],
        };

        return {
            posts,
            isFetching,
        };
    },
);
