import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

import { getAccessToken } from '../../redux/reducers/UserReducer';

import { createReport } from '../../redux/actions/WeekReportActions';

import Form from './ReportForm';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.weekInfo.weekName,
      headerRight: (
        <TouchableOpacity onPress={navigation.state.params.submit}>
          <View style={styles.container}>
            <Text style={styles.text}>저장</Text>
          </View>
        </TouchableOpacity>
      )
    };
  };

  state = {
    work: '',
    plan: '',
    isSubmitting: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      reportStatus: props.weekInfo.reportStatus,
      myReport: props.weekInfo.myReport,
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
    const { createReport, navigation, accessToken, weekInfo } = this.props;
    if (work && plan) {
      this.setState({
        isSubmitting: true
      });

      const createResult = await createReport(accessToken, weekInfo.id, work, plan);
      if (createResult) {
        setTimeout(() => {
          navigation.navigate('Week');
        }, 2000);
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
  const { navigation: { state: { params: { weekInfo } } } } = ownProps;
  return {
    accessToken: getAccessToken(state),
    weekInfo: weekInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReport: (accessToken, weekID, work, plan) => {
      return dispatch(createReport(accessToken, weekID, work, plan));
    },
  };
};

Container.propTypes = {
  accessToken: PropTypes.string.isRequired,
  weekInfo: PropTypes.object.isRequired,
  createReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
