import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReport: (accessToken, weekID, work, plan) => {
      return dispatch(weeksActions.createReport(accessToken, weekID, work, plan));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);