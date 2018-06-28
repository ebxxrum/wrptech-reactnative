import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import moment from 'moment';

import Calendar from './Calendar';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { actionCreators as calendarActions } from '../../redux/modules/calendar';
import { getRecentWeek, getCalendar, getPage } from './caledarReducer';

class Container extends Component {
  constructor(props) {
    super(props);
    console.log("calendar");
    console.log(props);
    var today = moment(new Date()).format('YYYY-MM-DD');
    this.state = {
      isLoading: false,
      isRefreshing: false,
      today: today,
      accessToken: props.accessToken,
      data: props.data,
      page: props.page
    };
  };

  render() {
    return (
      <Calendar
        {...this.state}
        {...this.props}
        refresh={this._handleRefresh}
        loadMore={this._handleLoadMore}
        renderFooter={this._renderFooter}
      />
    )
  };

  // infinite scroll 수정 필요
  componentDidMount() {
    // this._makeRemoteRequest();
  };

  _makeRemoteRequest = () => {
    const { page } = this.state;
    const { fetchWeeks, accessToken, profile } = this.props;
    this.setState({
      isLoading: true
    });

    const fetchResult = fetchWeeks(accessToken, page, profile);
    if (fetchResult) {
      setTimeout(() => {
        this.setState({
          data: this.props.data,
          isLoading: false,
          isRefreshing: false
        });
      }, 2000);
    };
  };

  _handleRefresh = () => {
    this.setState({
      page: 1,
      isRefreshing: true
    }, () => {
      this._makeRemoteRequest();
    });
  };

  _handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this._makeRemoteRequest();
    });
  };

  _renderFooter = () => {
    if (!this.state.isLoading) return null;
    return (
      <ActivityIndicator animating size="large" color="#e91b23" />
    );
  };
}

const mapStateToProps = (state, ownProps)=> {
  const { user, calendar } = state;
  return {
    accessToken: user.accessToken,
    profile: user.profile,
    // data: calendar.data,
    // page: calendar.page,
    // weekInfo: calendar.data[0]
    data: getCalendar(state),
    page: getPage(state),
    weekInfo: getRecentWeek(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeeks: (accessToken, page, profile) => {
      return dispatch(calendarActions.getWeeks(accessToken, page, profile));
    },
    goWeek: (accessToken, week) => {
      return dispatch(weekReportActions.getWeekReport(accessToken, week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
