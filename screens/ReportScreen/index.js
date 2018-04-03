import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as WeeksActions } from '../../redux/modules/weeks';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      console.log("report index - logout");
      return dispatch(userActions.logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
