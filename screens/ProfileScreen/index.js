import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      console.log("report index");
      return dispatch(userActions.logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
