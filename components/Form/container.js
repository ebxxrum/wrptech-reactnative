import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Form from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "createReport",
    headerRight: (
      <TouchableOpacity
        onPressOut={this._submit}
      >
        <Text style={styles.text}>저장</Text>
      </TouchableOpacity>
    )
  });

  state = {
    work: '',
    plan: '',
    isSubmitting: false
  };

  static propTypes = {
    createReport: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Form
        {...this.state}
        changeWork={this._changeWork}
        changePlan={this._changePlan}
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
    const { accessToken, id } = this.props.screenProps;
    if (!isSubmitting) {
      if (work && plan) {
        this.setState({
          isSubmitting: true
        });
        const createResult = await createReport(accessToken, id, work, plan);
        if (!createResult) {
          Alert.alert('Try again');
          this.setState({
            isSubmitting: false
          });
        } else {
          this.setState({
            isSubmitting: true
          });
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
