import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';
import ReportList from '../../components/ReportList';
import Action from '../../components/Action';
import ActionButton from 'react-native-action-button';
import style from '../commonStyle';

class CalendarScreen extends Component {
  state = {
    today: null,
    myReportIsNull: true,
    recentWeekName: null,
    isLoading: false,
    isRefreshing: false,
    data: [],
    page: 1
  };

  // store에 저장하는 것으로 변경!
  componentWillMount = () => {
    const { profile, recentArray, weeks } = this.props.screenProps;

    // store에 저장!
    recentArray.recentWeek.map(week =>
    profile.name === week.name && week.report &&
      this.setState({
        myReportIsNull: false,
        myReport: week.report
      })
    );

    var today = moment(new Date()).format('YYYY-MM-DD');
    this.setState({
      today: today,
      recentWeekName: recentArray.recentWeekName
      // data: weeks
    });
  };

  // infinite scroll 수정 필요
  componentDidMount() {
    this._makeRemoteRequest();
  };

  _makeRemoteRequest = async() => {
    const { page } = this.state;
    const { getWeeks } = this.props;
    const { accessToken } = this.props.screenProps;
    this.setState({
      isLoading: true
    });

    // store에 저장!
    const getResult = await getWeeks(accessToken, page);
    if (getResult) {
      setTimeout(() => {
        this.setState({
          data: page === 1 ? getResult : [...this.state.data, ...getResult],
          isLoading: false,
          // isRefreshing: false
        });
      }, 1500);
    };
  };

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        isRefreshing: true
      },
      () => {
        this._makeRemoteRequest();
      }
    );
  };

  _handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this._makeRemoteRequest();
      }
    );
  };

  render() {
    console.log("modal");
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
          {
            this.props.modalVisible &&
              <TouchableOpacity
                onPress={() => {
                  this.props.setModalVisible(this.props.modalVisible);
                }}>
                <SimpleLineIcons
                  style={style.navTop}
                  name='arrow-up'
                />
              </TouchableOpacity>
          }
        </View>
        <View style={styles.dateWrapper}>
          <Text style={styles.dateText}>TODAY {this.state.today}</Text>
        </View>

        <View style={styles.listWrapper}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) =>
              <ReportList item={item} {...this.props} />
            }
            keyExtractor={item => item.id}
            // onRefresh={this._handleRefresh}
            // refreshing={this.state.isRefreshing}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0}
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
            title={this.state.myReportIsNull ? "보고서 작성" : "보고서 수정"}
            onPress={() => this.props.navigation.navigate('Form', {reportStatus: this.state.myReportIsNull, report: this.state.myReport, weekName: this.state.recentWeekName})}
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
