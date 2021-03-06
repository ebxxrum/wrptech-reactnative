import React from 'react';
import { View, Text, TextInput, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';

const Form = props => {
  if (props.isSubmitting) {
    return (
      <ActivityIndicator size="large" color="#e91b23" style={styles.container}/>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          />
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
              multiline={true}
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
              multiline={true}
              autoCorrect={false}
              value={props.plan}
              onChangeText={props.changePlan}
            />
          </View>
        </View>
      </View>
    );
  }
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
  },

  richText: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default Form;
