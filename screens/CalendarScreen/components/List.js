import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const List = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.list}
        // onPress={props.}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.title}>보고일 {props.item.end_date}</Text>
          <Text style={styles.desc}>{props.item.weekName}</Text>
        </View>
        <View style={styles.iconWrapper}>

        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
    // marginTop: 18
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#DF2F3C'
  },
  desc: {
    paddingRight: 10,
    fontSize: 12,
    color: 'rgba(223,47,60,50)'
  },
  iconWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  circle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#DF2F3C',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  nestedIcon: {
    fontSize: 12,
    // color: '#fff',
  }
});

export default List;
