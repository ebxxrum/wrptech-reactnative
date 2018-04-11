import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';
import Form from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: " ",
      headerRight: (
        <TouchableOpacity
        >
          <Text style={styles.text}>저장</Text>
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
    const { navigation: { state: { params: { weekName, reportStatus, report } } } } = props;
    this.state = {
        myReportIsNull: reportStatus,
        myReport: report
    };
  };

  componentWillMount = () => {
    const { myReportIsNull, myReport } = this.state;
    if (!myReportIsNull) {
      this.setState({
        work: myReport.work,
        plan: myReport.plan
      });
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submit: this.submit
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
    const { createReport, navigation } = this.props;
    const { accessToken, weekID } = this.props.screenProps;
    if (work && plan) {
      this.setState({
        isSubmitting: true
      });
      const createResult = await createReport(accessToken, weekID, work, plan);
      navigation.goBack(null);
      // if (createResult) {
      //   console.log("suceess!");
      //   console.log(createResult);
      //   // navigation.goBack(null);
      //   navigation.navigate('Week');
      // }
    } else {
      Alert.alert('All fields are required!');
    }
  };
}

const styles = StyleSheet.create({
  text: {
    paddingRight: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DF2F3C'
  }
});

export default Container;
