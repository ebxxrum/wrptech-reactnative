import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WeekReport from './WeekReport';

import { getWeekReport } from '../../redux/actions/WeekReportActions';

import { getReport, getWeekInfo } from '../../redux/reducers/WeekReportReducer';
import { getRecentWeek } from '../../redux/reducers/CaledarReducer';
import { getAccessToken, getUser } from '../../redux/reducers/UserReducer';

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

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    accessToken: getAccessToken(state),
    profile: getUser(state),
    weekReport: getReport(state),
    weekInfo: getWeekInfo(state),
    recentWeekInfo: getRecentWeek(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeekReport: (accessToken, week) => {
      return dispatch(getWeekReport(accessToken, week));
    }
  };
};

Container.propTypes = {
  accessToken: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  weekReport: PropTypes.array.isRequired,
  weekInfo: PropTypes.object.isRequired,
  recentWeekInfo: PropTypes.object.isRequired,
  fetchWeekReport: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
