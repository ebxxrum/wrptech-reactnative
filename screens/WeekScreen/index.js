import { connect } from 'react-redux';
import React, { Component } from 'react';

import WeekReport from './WeekReport';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';

class Container extends Component {
  state = {
    modalVisible: false,
    // isFetching: true
  };

  constructor(props) {
    super(props);
    console.log("WeekScreen");
    console.log(props);
    this.state = {
      ...this.state,
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
    weekReport: weekReport.week,
    weekInfo: weekReport.weekInfo,
    recentWeekInfo: calendar.data[0]
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
