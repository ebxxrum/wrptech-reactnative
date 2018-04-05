import React from 'react';
import { ScrollView, WebView, View, Text, Dimensions, StyleSheet } from 'react-native';

var { height, width} = Dimensions.get('window');

const Report = props => {
  console.log("report!");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>작업내용</Text>
        </View>
        <WebView
          source={{html: props.report.work}}
          scalesPageToFit={false}
          style={{
            marginTop: 15,
            height: 150,
          }}
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>금주계획</Text>
        </View>
        <WebView
          source={{html: props.report.plan}}
          scalesPageToFit={false}
          style={{
            marginTop: 15,
            height: 150,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
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
});
export default Report;
