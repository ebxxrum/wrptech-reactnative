import React from 'react';
import { View, Text, WebView, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

var { height, width} = Dimensions.get('window');

const Report = props => {
  console.log("report!");
  return (
    <ScrollView>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>작업내용</Text>
        </View>
        <View style={styles.body}>
          <Text stlye={styles.text}>{props.report.work}</Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>금주계획</Text>
        </View>
        <View style={styles.body}>
          <Text stlye={styles.text}>{props.report.plan}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#fff'
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#DF2F3C'
  },
  title: {
    padding: 5,
    color: '#DF2F3C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    paddingTop: 15,
  }
});
export default Report;
