import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from '../commonStyle';

class Report extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text>report screen</Text>
        </View>
        <View style={style.body}>
        </View>
      </View>
    );
  }
}

export default Report;
