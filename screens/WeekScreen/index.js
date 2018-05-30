import { connect } from 'react-redux';
import React, { Component } from 'react';

import WeekScreen from './presenter';

class Container extends Component {
  state = {
    modalVisible: false,
    myReportIsNull: true,
  };

  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(props);
    this.state = {
      ...this.state,
      recentWeekReport: props.recentWeekReport
    };
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
    this.props.navigation.navigate('Form', {reportStatus: this.state.recentWeekReport.reportStatus, report: this.state.recentWeekReport.myReport, weekName: this.state.recentWeekReport.weekName});
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
}

const mapStateToProps = (state, ownProps) => {
  const { user, weekReport } = state;
  return {
    profile: user.profile,
    recentWeekReport: weekReport,
  };
};

export default connect(mapStateToProps, null)(Container);
