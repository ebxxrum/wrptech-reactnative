import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import style from '../commonStyle';

const LogInScreen = props => {
  return (
    <View style={style.container}>
      <View style={style.logoWrapper}>
        <Text style={style.subLogo}>
          WE R
        </Text>
        <Text style={style.mainLogo}>
          PROMPTECH
        </Text>
      </View>

      <View style={style.inputWrapper}>
        <TextInput
          style={style.input}
          placeholder='E-mail'
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          value={props.email}
          onChangeText={props.changeEmail}
        />
      </View>
      <View style={style.inputWrapper}>
        <TextInput
          style={style.input}
          placeholder='Password'
          autoCapitalize={'none'}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          value={props.password}
          onChangeText={props.changePassword}
          secureTextEntry={true}
          returnKeyType={'send'}
          onSubmitEditing={props.submit}
        />
      </View>

      <TouchableOpacity
        style={style.primaryBtn}
        onPressOut={props.submit}
        // onPress={() => {this.login();}}>
      >
        <Text style={style.nestedText}>로그인</Text>
      </TouchableOpacity>

      <View style={style.linkWrapper}>
        <Text
          style={style.link}
          onPress={props.join}
        >
          회원가입
        </Text>
        <Text style={style.link}>
          |
        </Text>
        <Text
          style={style.link}>
          비밀번호 찾기
        </Text>
      </View>
    </View>
  );
};

LogInScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default LogInScreen;
