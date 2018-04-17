import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapStateToProps = (state, ownProps) => {
  const { weeks } = state;
  return {
    searchedWeek: weeks.searchedWeek
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRecent: (accessToken, weeks) => {
      dispatch(weeksActions.getRecent(accessToken, weeks));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
