import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getWeeks: (accessToken, page) => {
      return dispatch(weeksActions.getWeeks(accessToken, page));
    },
    goWeek: (accessToken, weeks) => {
      return dispatch(weeksActions.getUsersWithReports(accessToken, weeks));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
