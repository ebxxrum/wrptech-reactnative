import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(AppContainer);
