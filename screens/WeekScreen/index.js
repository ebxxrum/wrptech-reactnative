import { connect } from 'react-redux';
import React, { Component } from 'react';

import WeekReport from './WeekReport';

class Container extends Component {
  state = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      WeekReport: props.recentWeekReport
    };
  };

  render() {
    return (
      <WeekReport
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
    this.props.navigation.navigate('Form', {reportStatus: this.state.WeekReport.reportStatus, report: this.state.WeekReport.myReport, weekName: this.state.WeekReport.weekName});
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
