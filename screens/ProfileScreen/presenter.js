import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../commonStyle';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        />

      <TouchableOpacity
        style={style.primaryBtn}
        onPressOut={props.logout}
      >
        <Text style={style.nestedText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
