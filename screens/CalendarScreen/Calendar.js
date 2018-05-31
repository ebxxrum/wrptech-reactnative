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

      <View style={styles.listWrapper}>
        <FlatList
          data={props.calendar}
          renderItem={({item}) =>
            <List item={item} {...item} {...props.profile} />
          }
          keyExtractor={item => item.id}
          // onRefresh={this._handleRefresh}
          // refreshing={this.state.isRefreshing}
          // onEndReached={this._handleLoadMore}
          // onEndReachedThreshold={0}
        />
      </View>





      <ActionButton
        buttonColor="rgba(223,47,60,100)"
        btnOutRange="rgba(176,176,176,100)"
        bgColor="rgba(0,0,0,0.85)"
      >
        <ActionButton.Item
          textContainerStyle={style.actionButtonTextContainer}
          textStyle={style.actionButtonText}
          buttonColor='#fff'
          title="마이페이지"
          onPress={() => props.navigation.navigate('Profile')}
        >
          <SimpleLineIcons name="user" style={style.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={style.actionButtonTextContainer}
          textStyle={style.actionButtonText}
          buttonColor='#fff'
          title="주별목록"
          //TODO view: modal
          onPress={() => props.navigation.navigate('Calendar')}
        >
          <SimpleLineIcons name="calendar" style={style.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={style.actionButtonTextContainer}
          textStyle={style.actionButtonText}
          buttonColor='#fff'
          title="이번주 보고서"
          onPress={() => props.navigation.navigate('Week')}
        >
          <SimpleLineIcons name="book-open" style={style.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={style.actionButtonTextContainer}
          textStyle={style.actionButtonText}
          title={props.recentWeekReport.reportStatus ? "보고서 작성" : "보고서 수정"}
          onPress={() => props.navigation.navigate('Form', {reportStatus: props.recentWeekReport.reportStatus, report: props.recentWeekReport.myReport, weekName: props.recentWeekReport.weekName})}
        >
          <SimpleLineIcons name="pencil" style={[style.actionButtonIcon, style.mainButtonIcon]} />
        </ActionButton.Item>
      </ActionButton>
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
