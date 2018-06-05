import { connect } from 'react-redux';
import React, { Component } from 'react';

import WeekReport from './WeekReport';

class Container extends Component {
  state = {
    searchedWeek: null,
    searchedInfo: null,
    modalVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      weekReport: props.weekReport,
      weekInfo: props.weekInfo
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
    if (this.props.navigation.state.params) {
      // const { searchedWeek, navigation: { state: { params: { updateDate } } } } = this.props;
      console.log("moving from calendar");
      this.setState({
        weekReport: this.props.weekReport,
        weekInfo: this.props.weekInfo,
        modalVisible: false
      });
    }
  };

  _goForm = () => {
    this.props.navigation.navigate('Form', {reportStatus: this.state.weekInfo.reportStatus, report: this.state.weekInfo.myReport, weekName: this.state.weekInfo.weekName});
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
    weekReport: weekReport.week,
    weekInfo: weekReport.weekInfo,
  };
};

export default connect(mapStateToProps, null)(Container);
