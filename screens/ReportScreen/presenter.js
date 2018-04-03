import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    // backgroundColor: '#B22645',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  navCalander: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
    // paddingBottom: 15,
  },
  navPeople: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    // paddingTop: 15,
  },
  navTop: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 18,
  },
  navBottom: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: -14,
    //change when addTouchableNav
    // backgroundColor: {active},
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 15,
  },
  body: {
    flex: 5,
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
  }
});

const active = ({ focused }) => {
  return ( focused ? '#B22645' : 'transparent' )
};

const ReportScreen = props => {
  console.log("ReportScreen");
  console.log(props);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        />
      <LinearGradient
        colors={['#DF2F3C', '#B22645']}
        style={styles.header}
      >
          <View style={styles.navCalander}>
            <SimpleLineIcons
              style={styles.navTop}
              name='calendar'
            />
            <Text style={styles.navTop}>3월 3주</Text>
          </View>
          <View style={styles.navPeople}>
            <Text style={styles.navBottom}>이보름</Text>
            <Text style={styles.navBottom}>최익수</Text>
            <Text style={styles.navBottom}>서예지</Text>
            <Text style={styles.navBottom}>임희진</Text>
            <Text style={styles.navBottom}>김예슬</Text>
            <Text style={styles.navBottom}>김선호</Text>
          </View>
      </LinearGradient>

      <View style={styles.body}>
      <TouchableOpacity
        style={style.primaryBtn}
        onPressOut={props.logout}
      >
        <Text style={style.nestedText}>로그아웃</Text>
      </TouchableOpacity>

      </View>

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
          onPress={() => props.navigation.navigate('Profile')}
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

export default ReportScreen;
