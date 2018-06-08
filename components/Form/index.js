import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';
import Form from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.weekName,
      headerRight: (
        <TouchableOpacity onPress={navigation.state.params.submit}>
          <View style={styles.container}>
            <Text style={styles.text}>저장</Text>
          </View>
        </TouchableOpacity>
      )
    };
  };

  static propTypes = {
    createReport: PropTypes.func.isRequired,
  };

  state = {
    work: '',
    plan: '',
    isSubmitting: false,
  };

  constructor(props) {
    super(props);
    const { navigation: { state: { params: { reportStatus, myReport } } } } = props;
    this.state = {
      ...this.state,
      myReport: myReport,
      reportStatus: reportStatus
    }
  };

  componentWillMount = () => {
    const { reportStatus, myReport } = this.state;
    if (reportStatus) {
      this.setState({
        work: myReport.work,
        plan: myReport.plan
      });
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submit: this._submit
    });
  }

  render() {
    return (
      <Form
        {...this.state}
        changeWork={this._changeWork}
        changePlan={this._changePlan}
        submit={this._submit}
      />
    );
  }

  _changeWork = text => {
    this.setState({
      work: text
    });
  };

  _changePlan = text => {
    this.setState({
      plan: text
    });
  };

  _submit = async() => {
    const { work, plan, isSubmitting } = this.state;
    const { createReport, getRecent, navigation, accessToken, recentWeek } = this.props;
    if (work && plan) {
      this.setState({
        isSubmitting: true
      });

      const createResult = await createReport(accessToken, recentWeek.id, work, plan);
      if (createResult) {
        await getRecent(accessToken, recentWeek);
        setTimeout(() => {
          navigation.navigate('Week');
        }, 2000);
        // navigation.goBack(null);
      }
    } else {
      Alert.alert('All fields are required!');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  text: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF2F3C'
  }
});

const mapStateToProps = (state, ownProps) => {
  const { recentWeek } = ownProps.screenProps;
  const { user } = state;
  return {
    accessToken: user.accessToken,
    recentWeek: recentWeek.weekInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReport: (accessToken, weekID, work, plan, info) => {
      return dispatch(weeksActions.createReport(accessToken, weekID, work, plan));
    },
    getRecent: (accessToken, week) => {
      dispatch(weekReportActions.getWeekReport(accessToken, week));
      // return dispatch(weeksActions.getRecent(accessToken, week));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
