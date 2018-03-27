import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
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
  }
});

const active = ({ focused }) => {
  return ( focused ? '#B22645' : 'transparent' )
};

class Report extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
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
              <FontAwesome
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
        </View>
      </View>
    );
  }
}

export default Report;
