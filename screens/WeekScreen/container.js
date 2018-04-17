import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import WeekScreen from './presenter';

class Container extends Component {
  state = {
    isFetching: false,
    isMoving: false,
    modalVisible: false,
    myReportIsNull: true,
    weekName: null,
    report: null
  };

  componentWillMount = () => {
    const { profile, weeks, recent } = this.props.screenProps;
    this.setState({
      report: recent
    });

    recent.map(recent =>
    profile.name === recent.name && recent.report &&
      this.setState({
        myReportIsNull: false,
        myReport: recent.report
      })
    );

    this._getWeekName(null, weeks[0]);
  };

  render() {
    return (
      <WeekScreen
        {...this.state}
        {...this.props}
        goForm={this._goForm}
        setModalVisible={this._setModalVisible}
        refresh={this._refresh}
      />
    );
  }

  componentDidMount = () => {
    // if (updateDate) {
    if (this.props.navigation.state.params) {
      const { navigation: { state: { params: { updateDate } } } } = this.props;
      const { searchedWeek } = this.props.screenProps;
      console.log("moving from calendar");

      this._getWeekName(updateDate, null);
      this.setState({
        report: searchedWeek
      });
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.weekName});
  };

  _getWeekName = (updateDate, week) => {
    var date = null;
    if (updateDate) {
      date = new Date(updateDate);
    } else {
      date = new Date(week.end_date);
    }
    date.setDate(date.getDate() + 1);

    // weekOfMonth 설정
    var year = date.getFullYear();
    var month = date.getMonth();
    var first = new Date(year, month, 1).getDay() - 1;
    var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;

    this.setState({
      weekName: (month+1) + "월" + weekOfMonth + "주"
    });
  };

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

  _refresh = () => {
    const { getRecent } = this.props;
    const { accessToken, weeks } = this.props.screenProps;
    this.setState({
      isFetching: true
    });
    getRecent(accessToken, weeks);
  };

}

export default Container;
