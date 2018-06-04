import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';

import Calendar from './Calendar';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';

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
    console.log(props);
    var today = moment(new Date()).format('YYYY-MM-DD');
    this.state = {
      today: today,
      accessToken: props.accessToken,
      data: props.data
    };
  };

  render() {
    return (
      <Calendar
        {...this.state}
        {...this.props}
        // {...this.props.navigation}
        // goWeek={this.props.goWeek}

      />
    )
  };

  _moveWeek = (week) => {
    const { accessToken, goWeek } = this.props;
    this.setState({
      isLoading: true
    });
    const getResult = goWeek(accessToken, week);
    if (getResult) {
      console.log("getResult");
      // this.props.navigation.navigate('Week', {updateDate: end_date});
    }
  };










  // infinite scroll 수정 필요
  componentDidMount() {
    // this._makeRemoteRequest();
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
}

const mapStateToProps = (state, ownProps)=> {
  const { user, calendar } = state;
  return {
    accessToken: user.accessToken,
    data: calendar.data,
    page: calendar.page,
    hasMoreData: calendar.hasMoreData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goWeek: (accessToken, week) => {
      return dispatch(weekReportActions.getWeekReport(accessToken, week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
