import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsersWithReports: (accessToken, weekID) => {
      return dispatch(weeksActions.getUsersWithReports(accessToken, weekID));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
