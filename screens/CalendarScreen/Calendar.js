import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

import List from './components/List';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';

const CalendarScreen = (props) => {
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
          data={props.data}
          renderItem={({item}) =>
            <List item={item}
                  accessToken={props.accessToken}
                  goWeek={props.goWeek}
                  navigation={props.navigation}
            />
          }
          keyExtractor={item => item.id}
          ListFooterComponent={props.renderFooter}
          onRefresh={props.refresh}
          refreshing={props.isRefreshing}
          onEndReached={props.loadMore}
          onEndReachedThreshold={100}
        />
      </View>

      <ActionButton
        buttonColor="rgba(223,47,60,100)"
        btnOutRange="rgba(176,176,176,100)"
        bgColor="rgba(0,0,0,0.85)"
      >
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="로그아웃"
          onPress={props.screenProps.logout}
        >
          <SimpleLineIcons name="logout" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="주별목록"
          //TODO view: modal
          onPress={() => props.navigation.navigate('Calendar')}
        >
          <SimpleLineIcons name="calendar" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="이번주 보고서"
          onPress={() => props.navigation.navigate('Week')}
        >
          <SimpleLineIcons name="book-open" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          title={props.weekInfo.reportStatus ? "보고서 수정" : "보고서 작성"}
          onPress={() => props.navigation.navigate('Report', {weekInfo: props.weekInfo})}
        >
          <SimpleLineIcons name="pencil" style={[styles.actionButtonIcon, styles.mainButtonIcon]} />
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#DF2F3C',
  },
  mainButtonIcon: {
    color: '#fff',
  },
  actionButtonTextContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  actionButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },

});

export default CalendarScreen;
