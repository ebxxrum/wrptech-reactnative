import React from 'react';
import { ScrollView, WebView, View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import style from '../../screens/commonStyle';

var { height, width} = Dimensions.get('window');

const Report = props => {
  console.log("report");
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      {props.report ?
        (
          <View>
            <View style={styles.contentWrapper}>
              <View style={styles.header}>
                <Text style={styles.title}>작업내용</Text>
              </View>
              <WebView
                source={{html: props.report.work}}
                scalesPageToFit={false}
                style={{
                  marginTop: 15,
                  height: 250,
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
                  height: 250,
                }}
              />
            </View>
          </View>
        )
        :
        props.current_user === props.name ?
          (
            <View style={styles.contentWrapper}>
              <View style={styles.errorWrapper}>
                <View style={styles.textWrapper}>
                  <Text>이번주 보고서가 아직 작성되지 않았습니다.</Text>
                  <Text>보고서를 작성해주세요.</Text>
                </View>
                <TouchableOpacity
                  style={style.primaryBtn}
                  onPress={props.goForm}
                >
                  <Text style={style.nestedText}>보고서 작성하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        :
        (
          <View style={styles.contentWrapper}>
            <View style={styles.errorWrapper}>
              <View style={styles.textWrapper}>
                <Text>이번주 보고서가 아직 작성되지 않았습니다.</Text>
              </View>
            </View>
          </View>
        )
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    // flexDirection: 'column',
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorWrapper: {
    paddingTop: 150,
    paddingBottom: 200
  },
  textWrapper: {
    alignItems: 'center',
    paddingBottom: 15,
  }
});
export default Report;
