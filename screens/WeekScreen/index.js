import { connect } from 'react-redux';
import React, { Component } from 'react';

import WeekReport from './WeekReport';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { getWeekReport, getWeekInfo } from './weekReportReducer';
import { getRecentWeek } from '../CalendarScreen/caledarReducer';

class Container extends Component {
  constructor(props) {
    super(props);
    console.log("WeekScreen");
    console.log(props);
    this.state = {
      modalVisible: false,
      weekReport: props.weekReport,
      weekInfo: props.weekInfo
    };
  };

  render() {
    return (
      <WeekReport
        {...this.state}
        {...this.props}
        setModalVisible={this._setModalVisible}
        goForm={this._goForm}
      />
    );
  }

  componentDidMount = () => {
    if (!this.props.navigation.state.params) {
      const { fetchWeekReport, accessToken, recentWeekInfo } = this.props;
      const fetchResult = fetchWeekReport(accessToken, recentWeekInfo);
      if (fetchResult) {
        this.setState({
          weekReport: this.props.weekReport,
          weekInfo: this.props.weekInfo,
        });
      };
    };
  }

  _setModalVisible = (visible) => {
    if (!visible) {
      this.setState({
        modalVisible: true
      });
    } else {
      this.setState({
        modalVisible: false
      });
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Report', {weekInfo: this.state.weekInfo});
  };
}

const mapStateToProps = (state, ownProps) => {
  const { user, weekReport, calendar } = state;
  return {
    accessToken: user.accessToken,
    profile: user.profile,
    // weekReport: weekReport.week,
    // weekInfo: weekReport.weekInfo,
    // recentWeekInfo: calendar.data[0],
    weekReport: getWeekReport(state),
    weekInfo: getWeekInfo(state),
    recentWeekInfo: getRecentWeek(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeekReport: (accessToken, week) => {
      return dispatch(weekReportActions.getWeekReport(accessToken, week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
