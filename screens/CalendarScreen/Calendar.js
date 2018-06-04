import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';
// import ReportList from '../../components/ReportList';
import List from './components/List';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';

const CalendarScreen = (props) => {
  console.log("calendar");
  console.log(props);
  return (
    <LinearGradient
      style={styles.container}
      colors={['#DF2F3C', '#B22645']}
    >
      <View style={style.navCalander}>
        <SimpleLineIcons
          style={style.navTop}
          name='calendar'
        />
        <Text style={style.navTop}>주별목록</Text>
        {
          props.modalVisible &&
            <TouchableOpacity
              onPress={() => {
                props.setModalVisible(props.modalVisible);
              }}>
              <SimpleLineIcons
                style={style.navTop}
                name='arrow-up'
              />
            </TouchableOpacity>
        }
      </View>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>TODAY {props.today}</Text>
      </View>
    </LinearGradient>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15
  },
  dateText: {
    color: '#fff',
    fontSize: 15

  },
});

export default CalendarScreen;
