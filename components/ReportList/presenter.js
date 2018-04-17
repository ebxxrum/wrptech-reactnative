import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const ReportListScreen = props => {
  return (
    <View>
      <TouchableOpacity
        style={styles.list}
        onPress={props.goWeek}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.title}>보고일 {props.item.end_date}</Text>
          <Text style={styles.desc}>{props.weekName}</Text>
        </View>
        <View style={styles.iconWrapper}>
          {
            props.reportStatus ?
            (
              <View style={styles.circle} backgroundColor='#DF2F3C'>
                <SimpleLineIcons
                  style={styles.nestedIcon}
                  color='#fff'
                  name='pencil'
                />
              </View>
            )
            :
            (
              <View style={styles.circle}>
                <SimpleLineIcons
                  style={styles.nestedIcon}
                  color='#DF2F3C'
                  name='arrow-down'
                />
              </View>
            )
          }
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

export default ReportListScreen;
