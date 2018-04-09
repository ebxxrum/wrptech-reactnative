import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeekScreen from './presenter';

class Container extends Component {
  state = {
    isFetching: false,
    myReportIsNull: true
  };

  componentWillMount = () => {
    const { profile, thisWeek } = this.props.screenProps;
    thisWeek.map(thisWeek =>
    profile.name === thisWeek.name && thisWeek.report &&
      this.setState({
        myReportIsNull: false,
        myReport: thisWeek.report
      })
    )
  };

  render() {
    return (
      <WeekScreen
        {...this.state}
        {...this.props.screenProps}
        logout={this._logout}
        goProfile={this._goProfile}
        goForm={this._goForm}
        refresh={this._refresh}
      />
    );
  }

  _logout = () => {
    const { logout } = this.props;
    console.log("_logout");
    console.log(logout);
    logout();
  };

  _goProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport});
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
