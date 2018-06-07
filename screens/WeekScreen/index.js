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
    console.log("WeekScreen");
    console.log(props);
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
        setModalVisible={this._setModalVisible}
        // refresh={this._refresh}
      />
    );
  }

  // componentDidMount = () => {
  // };

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
  // const { recentWeek } = ownProps.screenProps;
  const { user, weekReport } = state;
  return {
    profile: user.profile,
    weekReport: weekReport.week,
    weekInfo: weekReport.weekInfo,
    // recentWeek: recentWeek
  };
};

export default connect(mapStateToProps, null)(Container);
