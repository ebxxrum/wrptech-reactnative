import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from './style';

class LogIn extends Component {
  render() {
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
          <FontAwesome
            style={style.textIcon}
            name='envelope'/>
          <TextInput
            style={style.input}
            placeholder='E-mail'
            // onChangeText={(value) => this.setState({email : value})}
          />
        </View>
        <View style={style.inputWrapper}>
          <FontAwesome
            style={style.textIcon}
            name='unlock-alt'/>
          <TextInput
            style={style.input}
            placeholder='Password'
            // onChangeText={(value) => this.setState({password : value})}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={style.primaryBtn}
          // onPress={() => {this.login();}}>
        >
          <Text style={style.nestedText}>로그인</Text>
        </TouchableOpacity>

        <View style={style.linkWrapper}>
          <Text
            style={style.link}
            // onPress={() => {Actions.Join();}}>
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
  }
}

export default LogIn;
