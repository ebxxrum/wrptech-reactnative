import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ReportListScreen from './presenter';

class Container extends Component {
  state = {
    weekName: null
  };

  componentWillMount = () => {
    const { end_date } = this.props;
    var date = new Date(end_date);

    var year = date.getFullYear();
    var month = date.getMonth();
    var first = new Date(year, month, 1).getDay() - 1;
    var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;

    this.setState({
      weekName: (month+1) + "월" + weekOfMonth + "주"
    });
  };

  render() {
    return (
      <ReportListScreen
        {...this.state}
        {...this.props}
        goWeek={this._goWeek}
      />
    );
  }

  _goWeek = async() => {
    // this.props.navigation.navigate('Week', {...this.props, ...this.state});
    const { getUsersWithReports, id, end_date } = this.props;
    const { accessToken } = this.props.screenProps;
    const getResult = await getUsersWithReports(accessToken, id);
    this.props.navigation.navigate('Week', {updateDate: end_date});
  }
}

export default Container;
