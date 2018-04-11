import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';
import ReportList from '../../components/ReportList';
import Action from '../../components/Action';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';

class CalendarScreen extends Component {
  state = {
    today: null,
    weekName: null
  };

  componentWillMount = () => {
    var today = moment(new Date()).format('YYYY-MM-DD');
    this.setState({
      today: today
    });
  };

  render() {
    console.log("calendar");
    console.log(this.props);
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
        </View>
        <View style={styles.dateWrapper}>
          <Text style={styles.dateText}>TODAY {this.state.today}</Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={this.props.screenProps.weeks}
            renderItem={({item}) =>
              <ReportList {...item} profile={this.props.screenProps.profile} />
            }
            keyExtractor={item => item.id}
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
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <SimpleLineIcons name="user" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={style.actionButtonTextContainer}
            textStyle={style.actionButtonText}
            buttonColor='#fff'
            title="주별목록"
            //TODO view: modal
            onPress={() => this.props.navigation.navigate('Calendar')}
          >
            <SimpleLineIcons name="calendar" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={style.actionButtonTextContainer}
            textStyle={style.actionButtonText}
            buttonColor='#fff'
            title="이번주 보고서"
            onPress={() => this.props.navigation.navigate('Week')}
          >
            <SimpleLineIcons name="book-open" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            textContainerStyle={style.actionButtonTextContainer}
            textStyle={style.actionButtonText}
            title={this.props.myReportIsNull ? "보고서 작성" : "보고서 수정"}
            onPress={this.props.goForm}
          >
            <SimpleLineIcons name="pencil" style={[style.actionButtonIcon, style.mainButtonIcon]} />
          </ActionButton.Item>
        </ActionButton>
      </LinearGradient>
    );
  }
};

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
