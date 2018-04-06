import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-natvie';
// import style from '../../screens/commonStyle';

const Form = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text>작업내용</Text>
        </View>
        <View style={styles.form}>
          
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text>금주계획</Text>
        </View>
        <View style={styles.form}>
        </View>
      </View>
    </View>
  );
};

export default Form;
