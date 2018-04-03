import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import style from '../commonStyle';

class Join extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.joinWrapper}>
        <View style={style.inputWrapper}>
          <FontAwesome
            style={style.textIcon}
            name='user'
            />
          <TextInput
            style={style.input}
            placeholder='Name'
            // onChangeText={(value) => this.setState({name : value})}
          />
        </View>
        <View style={style.inputWrapper}>
          <FontAwesome
            style={style.textIcon}
            name='envelope'
            />
          <TextInput
            style={style.input}
            placeholder='E-mail'
            // onChangeText={(value) => this.setState({email : value})}
          />
        </View>
        <View style={style.inputWrapper}>
          <FontAwesome
            style={style.textIcon}
            name='unlock-alt'
            />
          <TextInput
            style={style.input}
            placeholder='Password'
            // onChangeText={(value) => this.setState({password : value})}
            secureTextEntry={true}
          />
        </View>
        <View style={style.inputWrapper}>
          <FontAwesome
            style={style.textIcon}
            name='unlock-alt'
            />
          <TextInput
            style={style.input}
            placeholder='Confirm Password'
            // onChangeText={(value) => this.setState({confirm_password : value})}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={style.primaryBtn}
          // onPress={() => {this.join();}}>
        >
          <Text style={style.nestedText}>가입하기</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Join;
