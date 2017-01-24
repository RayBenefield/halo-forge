import { connect } from 'react-redux';
import { selectQu } from 'src/actions';

export default connect(
    state => ({
        value: state.selectedQu,
        options: ['reddit::halo', 'firebase'],
    }),
    dispatch => ({
        onChange: (nextQu) => {
            dispatch(selectQu(nextQu));
        },
    })
);
