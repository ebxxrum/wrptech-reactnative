import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';

import Calendar from './Calendar';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

class Container extends Component {
  state = {
    today: null,
    myReportIsNull: true,
    recentWeekName: null,
    isLoading: false,
    isRefreshing: false,
    data: [],
    page: 1
  };

  constructor(props) {
    super(props);

    var today = moment(new Date()).format('YYYY-MM-DD');
    this.state = {
      today: today,
      data: props.data
    };
  };

  // infinite scroll 수정 필요
  componentDidMount() {
    this._makeRemoteRequest();
  };

  _makeRemoteRequest = async() => {
    const { page } = this.state;
    const { getWeeks } = this.props;
    const { accessToken } = this.props.screenProps;
    this.setState({
      isLoading: true
    });

    // store에 저장!
    const getResult = await getWeeks(accessToken, page);
    if (getResult) {
      setTimeout(() => {
        this.setState({
          data: page === 1 ? getResult : [...this.state.data, ...getResult],
          isLoading: false,
          // isRefreshing: false
        });
      }, 1500);
    };
  };

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        isRefreshing: true
      },
      () => {
        this._makeRemoteRequest();
      }
    );
  };

  _handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this._makeRemoteRequest();
      }
    );
  };

  render() {
    return (
      <Calendar
        {...this.state}
        {...this.props}
      />
    )
  };
}

const mapStateToProps = (state, ownProps)=> {
  const { calendar } = state;
  return {
    data: calendar.data,
    page: calendar.page,
    hasMoreData: calendar.hasMoreData
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Container);
