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
    // recentArray: null,
    // weekReport:

    // report: null
  };

  constructor (props) {
    super(props);
    this.state = {
      weekReport: props.screenProps.recentArray.recentWeek
    };
  };

  componentWillMount = () => {
    const { profile, recentArray } = this.props.screenProps;
    console.log("whit??");
    console.log(recentArray);
    this.setState({
      weekReport: recentArray.recentWeek
    });
    // const { weekReport } = this.state;
    this._getMyReport(profile, recentArray.recentWeek);
    // recent api 수정 recen -> recent, recentWeekID, recentEndDate
    this._getWeekName(null, recentArray.recentEndDate);
  };

  render() {
    console.log("WeekScreen");
    console.log(this.state);
    return (
      <WeekScreen
        {...this.state}
        {...this.props}
        goForm={this._goForm}
        setModalVisible={this._setModalVisible}
        // refresh={this._refresh}
      />
    );
  }

  componentDidMount = () => {
    // if (updateDate) {
    if (this.props.navigation.state.params) {
      const { searchedWeek, navigation: { state: { params: { updateDate } } } } = this.props;
      console.log("moving from calendar");
      this._getWeekName(updateDate, null);
      this.setState({
        weekReport: searchedWeek
      });
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.weekName});
  };

  _getMyReport = (profile, recentWeek) => {
    recentWeek.map(week =>
      profile.name === week.name && week.report &&
        this.setState({
          myReportIsNull: false,
          myReport: week.report
        })
    );
  };

  _getWeekName = (updateDate, recentEndDate) => {
    var date = null;
    if (updateDate) {
      date = new Date(updateDate);
    } else {
      date = new Date(recentEndDate);
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
