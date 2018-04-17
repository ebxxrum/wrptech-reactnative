import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ReportListScreen from './presenter';

class Container extends Component {
  state = {
    weekName: null,
    reportStatus: true
    // iconName: 'pencil',
    // iconColor: '#fff',
    // circleColor: '#DF2F3C'
  };

  componentWillMount = () => {
    const { end_date } = this.props.item;
    this._getWeekName(end_date);
    this._getWeek();
  };

  render() {
    console.log("ReportList");
    // console.log(this.props);
    console.log(this.state);
    return (
      <ReportListScreen
        {...this.state}
        {...this.props}
        goWeek={this._goWeek}
      />
    );
  }

  _goWeek = async() => {
    const { getUsersWithReports } = this.props;
    const { id, end_date } = this.props.item;
    const { accessToken } = this.props.screenProps;
    const getResult = await getUsersWithReports(accessToken, id);
    if (getResult) {
      this.props.navigation.navigate('Week', {updateDate: end_date});
    }
  };

  _getWeek = async() => {
    const { getUsersWithReports } = this.props;
    const { id } = this.props.item;
    const { accessToken, profile } = this.props.screenProps;
    const getResult = await getUsersWithReports(accessToken, id);
    if (getResult) {
      console.log("getWeek in reportList");
      // console.log(getResult);
      getResult.map(result =>
      profile.name === result.name && result.report &&
        this.setState({
          reportStatus: false,
          // iconName: 'check',
          // iconColor: '#DF2F3C',
          // circleColor: 'rgba(255,255,255,0.8)'
        })
      );
    }

  };

  _getWeekName = (date) => {
    var date = new Date(date);

    var year = date.getFullYear();
    var month = date.getMonth();
    var first = new Date(year, month, 1).getDay() - 1;
    var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;

    this.setState({
      weekName: (month+1) + "월" + weekOfMonth + "주"
    });
  };

}

export default Container;
