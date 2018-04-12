import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import WeekScreen from './presenter';

class Container extends Component {
  state = {
    isFetching: false,
    modalVisible: false,
    myReportIsNull: true,
    weekName: null,
  };

  componentWillMount = () => {
    const { profile, weeks, thisWeek } = this.props.screenProps;

    thisWeek.map(thisWeek =>
    profile.name === thisWeek.name && thisWeek.report &&
      this.setState({
        myReportIsNull: false,
        myReport: thisWeek.report
      })
    );

    this._getWeekName(null, weeks[0]);
  };

  render() {
    console.log("week container");
    console.log(this.props);
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
    console.log("props");
    console.log(this.props);
    if (this.props.navigation.state.params) {
      this._getWeekName(this.props.navigation.state.params.updateDate, null);
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.weekName});
  };

  _getWeekName = (updateDate, week) => {
    var date = null;
    if (updateDate) {
      date = new Date(updateDate)
    } else {
      date = new Date(week.end_date)
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
    const { getThisWeek } = this.props;
    const { accessToken, weekID } = this.props.screenProps;
    this.setState({
      isFetching: true
    });
    getThisWeek(accessToken, weekID);
  };

}

export default Container;
