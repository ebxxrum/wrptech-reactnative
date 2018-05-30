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
  };

  constructor (props) {
    super(props);
    console.log("constructor");
    console.log(props);
    this.state = {
      ...this.state,
      weekReport: props.screenProps.recentArray.recentWeek,
      weekName: props.screenProps.recentArray.recentWeekName,
      recentWeekName: props.screenProps.recentArray.recentWeekName
    };
  };

  componentWillMount = () => {
    const { profile, recentArray } = this.props.screenProps;
    this._getMyReport(profile, recentArray.recentWeek);
  };

  render() {
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
      this._getWeekName(updateDate);
      this.setState({
        weekReport: searchedWeek,
        modalVisible: false
      });
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.recentWeekName});
  };

  _getMyReport = (profile, recentWeek) => {
    console.log("_getMyReport");
    recentWeek.map(week =>
      profile.name === week.name && week.report &&
        this.setState({
          myReportIsNull: false,
          myReport: week.report
        })
    );
  };

  _getWeekName = (updateDate) => {
    var date = new Date(updateDate);
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
