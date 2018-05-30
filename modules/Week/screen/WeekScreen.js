import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';

import style from '../../../screens/commonStyle';

import WeekNav from '../components/WeekNav';

import { getWeekReport } from '../WeeksActions';

import { getWeek, getWeekInfo, getWeekName, getReportStatus } from '../WeekReducer';

class WeekScreen extends Component {
  constructor(props) {
    super(props);
    console.log("weekscreen - constructor");
    console.log(props);

    this.state = {
      isModalVisible: false
    };
  }

  componentDidMount() {
    const { accessToken, week, profile } = this.props;
    this.props.getWeekReport(accessToken, week, profile);
  }

  render() {
    console.log("weekscreen - view");
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.navPeople}>
          <ScrollableTabView
            tabBarInactiveTextColor={'rgba(255,255,255,0.54)'}
            tabBarActiveTextColor={'#fff'}
            tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}
            initialPage={3}
            renderTabBar={() =>
              <ScrollableTabBar backgroundColor='#B22645' />}>
              {
              }
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    week: getWeek(state),
    weekInfo: getWeekInfo(state),
    weekName: getWeekName(state),
    reportStatus: getReportStatus(state)
  };
}

function mapDispatchToProps(dispatch, props) {
  // const { accessToken, week, profile } = this.props;
  return {
    getWeekReport: (accessToken, week, profile) => {
      dispatch(getWeekReport(accessToken, week, profile));
    }
  };
}
