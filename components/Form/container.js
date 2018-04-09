import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Form from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "createReport",
    headerRight: (
      <TouchableOpacity
        onPress={this._submit}
      >
        <Text style={styles.text}>저장</Text>
      </TouchableOpacity>
    )
  });

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
    const { navigation: { state: { params: { reportStatus, report } } } } = props;
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
    const { createReport } = this.props;
    const { accessToken, weekID } = this.props.screenProps;
    if (!isSubmitting) {
      if (work && plan) {
        this.setState({
          isSubmitting: true
        });
        console.log("submit!");
        const createResult = await createReport(accessToken, weekID, work, plan);
        if (!createResult) {
          Alert.alert('Try again');
          console.log(createResult);
          this.setState({
            isSubmitting: false
          });
        } else {
          this.props.navigation.navigate('Week');
        }
      } else {
        Alert.alert('All fields are required!');
      }
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
