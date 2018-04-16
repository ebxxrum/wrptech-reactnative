import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

class Action extends Component {
  // componentWillMount = () => {
  //   const { profile, thisWeek } = this.props.screenProps;
  //   thisWeek.map(thisWeek =>
  //   profile.name === thisWeek.name && thisWeek.report &&
  //     this.setState({
  //       myReportIsNull: false,
  //       myReport: thisWeek.report
  //     })
  //   );
  // };

  render() {
    return (
      <View>
        <ActionButton
          buttonColor="rgba(223,47,60,100)"
          btnOutRange="rgba(176,176,176,100)"
          bgColor="rgba(0,0,0,0.85)"
        >
          <ActionButton.Item
            textContainerStyle={styles.actionButtonTextContainer}
            textStyle={styles.actionButtonText}
            buttonColor='#fff'
            title="마이페이지"
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <SimpleLineIcons name="user" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={styles.actionButtonTextContainer}
            textStyle={styles.actionButtonText}
            buttonColor='#fff'
            title="주별목록"
            //TODO view: modal
            onPress={() => {}}
          >
            <SimpleLineIcons name="calendar" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={styles.actionButtonTextContainer}
            textStyle={styles.actionButtonText}
            buttonColor='#fff'
            title="이번주 보고서"
            onPress={() => this.props.navigation.navigate('Week')}
          >
            <SimpleLineIcons name="book-open" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={styles.actionButtonTextContainer}
            textStyle={styles.actionButtonText}
            title={this.props.myReportIsNull ? "보고서 작성" : "보고서 수정"}
            // onPress={() => this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.weekName})}
          >
            <SimpleLineIcons name="pencil" style={[styles.actionButtonIcon, styles.mainButtonIcon]} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#DF2F3C',
  },
  mainButtonIcon: {
    color: '#fff',
  },

  actionButtonTextContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  actionButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  }
});

export default Action;
