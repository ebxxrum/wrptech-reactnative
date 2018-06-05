import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';
import Report from './components/Report';
import Calendar from '../CalendarScreen';

const WeekScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
      >
        <Calendar {...props} />
      </Modal>

      <LinearGradient
        colors={['#DF2F3C', '#B22645']}
      >
        <View style={style.navCalander}>
          <SimpleLineIcons
            style={style.navTop}
            name='calendar'
          />
          <Text style={style.navTop}>{props.weekInfo.weekName}</Text>
          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(props.modalVisible);
            }}>
            <SimpleLineIcons
              style={style.navTop}
              name='arrow-down'
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.navPeople}>
        <ScrollableTabView
          tabBarInactiveTextColor={'rgba(255,255,255,0.54)'}
          tabBarActiveTextColor={'#fff'}
          tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}
          initialPage={3}
          renderTabBar={() =>
            <ScrollableTabBar backgroundColor='#B22645' />}>
            {
              props.weekReport.map(report =>
                report.seq < 999 &&
                <Report {...report} goForm={props.goForm} current_user={props.profile.name} tabLabel={report.name} key={report.id} />
              )
            }
        </ScrollableTabView>
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
          title="마이페이지"
          onPress={() => props.navigation.navigate('Profile')}
        >
          <SimpleLineIcons name="user" style={styles.actionButtonIcon} />
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
          onPress={() => props.navigation.navigate('Form')}
        >
          <SimpleLineIcons name="pencil" style={[styles.actionButtonIcon, styles.mainButtonIcon]} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navPeople: {
    flex: 1,
    backgroundColor: '#fff',
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

export default WeekScreen;
