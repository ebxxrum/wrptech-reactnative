import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Form = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text>작업내용</Text>
        </View>
        <View style={styles.form}>
          <TextInput />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text>금주계획</Text>
        </View>
        <View style={styles.form}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Form;
