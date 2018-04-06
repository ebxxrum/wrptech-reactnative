import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';
import Report from '../../components/Report';
// import { NavigationActions } from 'react-navigation';

const WeekScreen = props => {
  console.log("WeekScreen");
  console.log(props);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        />
        <LinearGradient
          colors={['#DF2F3C', '#B22645']}
        >
          <View style={styles.navCalander}>
            <SimpleLineIcons
              style={styles.navTop}
              name='calendar'
            />
            <Text style={styles.navTop}>3월 3주</Text>
          </View>

          <View style={styles.navPeople}>
            <ScrollableTabView
              tabBarInactiveTextColor={'rgba(255,255,255,0.54)'}
              tabBarActiveTextColor={'#fff'}
              tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}
              initialPage={3}
              renderTabBar={() =>
                <ScrollableTabBar backgroundColor='transparent' />}>
                {props.thisWeek.map(thisWeek =>
                  thisWeek.seq < 999 &&
                  <Report {...thisWeek} current_user={props.profile.name} tabLabel={thisWeek.name} key={thisWeek.id} />
                )}
            </ScrollableTabView>
          </View>
        </LinearGradient>


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
          onPress={props.goProfile}
        >
          <SimpleLineIcons name="user" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="주별목록"
          onPress={() => {}}
        >
          <SimpleLineIcons name="calendar" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="이번주 보고서"
          onPress={() => {}}
        >
          <SimpleLineIcons name="book-open" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          title="보고서 작성"
          onPress={() => {}}
        >
          <SimpleLineIcons name="pencil" style={[styles.actionButtonIcon, styles.mainButtonIcon]} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header: {
    // flex: 1,
    // backgroundColor: '#B22645',
    // justifyContent: 'center',
    // alignItems: 'center'
  // },
  navCalander: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
    // paddingBottom: 15,
  },
  navPeople: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingTop: 15,
  },
  navTop: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 18,
  },
  navBottom: {
    // paddingTop: 10,
    // paddingBottom: 10,
    // paddingLeft: 25,
    // paddingRight: 25,
    // marginBottom: -14,
    //change when addTouchableNav
    // backgroundColor: {active},
    // backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 15,
  },
  body: {
    backgroundColor: '#fff'
  },
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
  },
});

export default WeekScreen;
