import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecent: (accessToken, weeks) => {
      dispatch(weeksActions.getRecent(accessToken, weeks));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
