import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import style from '../../screens/commonStyle';

const Form = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>작업내용</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='탭하여 내용 입력하기'
            autoCapitalize={'none'}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            value={props.work}
            onChangeText={props.changeWork}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>금주계획</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='탭하여 내용 입력하기'
            autoCapitalize={'none'}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            value={props.plan}
            onChangeText={props.changePlan}
          />
        </View>
      </View>
      <TouchableOpacity
        style={style.primaryBtn}
        onPress={props.submit}
      >
        <Text style={style.nestedText}>저장</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentWrapper: {
    // padding: 15,
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#B0B0B0'
  },
  title: {
    fontSize: 18
  },
  form: {
    padding: 15,
  },
  input: {
    fontSize: 16
  }
});

export default Form;
