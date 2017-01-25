import { connect } from 'react-redux';
import keys from 'lodash/keys';
import { selectQu } from 'src/actions';

export default connect(
    state => ({
        value: state.selectedQu,
        options: keys(state.qus),
    }),
    dispatch => ({
        onChange: (nextQu) => {
            dispatch(selectQu(nextQu));
        },
    })
);
