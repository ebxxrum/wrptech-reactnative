import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import Calendar from './Calendar';

import { getWeeks } from '../../redux/actions/CalendarActions';
import { getWeekReport } from '../../redux/actions/WeekReportActions';

import { getAccessToken, getUser } from '../../redux/reducers/UserReducer';
import { getRecentWeek, getCalendar, getPage } from '../../redux/reducers/CaledarReducer';

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

const mapStateToProps = state => {
  return {
    accessToken: getAccessToken(state),
    profile: getUser(state),
    data: getCalendar(state),
    page: getPage(state),
    weekInfo: getRecentWeek(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeeks: (accessToken, page, profile) => {
      return dispatch(getWeeks(accessToken, page, profile));
    },
    goWeek: (accessToken, week) => {
      return dispatch(getWeekReport(accessToken, week));
    }
  };
};

Container.propTypes = {
  accessToken: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  weekInfo: PropTypes.object.isRequired,
  fetchWeeks: PropTypes.func.isRequired,
  goWeek: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
