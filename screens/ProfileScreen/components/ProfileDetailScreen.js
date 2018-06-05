import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import style from '../../commonStyle';

class ProfileDetailScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.joinWrapper}>
          <View style={style.inputWrapper}>
            <SimpleLineIcons
              style={style.textIcon}
              name='user'
              />
            <TextInput
              style={style.input}
              placeholder={this.props.profile.name}
              placeholderTextColor="#000"
              autoCapitalize={'none'}
              // onChangeText={(value) => this.setState({name : value})}
            />
          </View>
          <View style={style.inputWrapper}>
            <SimpleLineIcons
              style={style.textIcon}
              name='envelope'
              />
            <TextInput
              style={style.input}
              placeholder={this.props.profile.email}
              placeholderTextColor="#000"
              // onChangeText={(value) => this.setState({email : value})}
            />
          </View>
          <View style={style.inputWrapper}>
            <SimpleLineIcons
              style={style.textIcon}
              name='lock'
              />
            <TextInput
              style={style.input}
              placeholder='New Password'
              // onChangeText={(value) => this.setState({password : value})}
              secureTextEntry={true}
            />
          </View>
          <View style={style.inputWrapper}>
            <SimpleLineIcons
              style={style.textIcon}
              name='lock'
              />
            <TextInput
              style={style.input}
              placeholder='Password'
              // onChangeText={(value) => this.setState({password : value})}
              secureTextEntry={true}
            />
          </View>
          <View style={style.inputWrapper}>
            <SimpleLineIcons
              style={style.textIcon}
              name='lock'
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
            <Text style={style.nestedText}>수정하기</Text>
          </TouchableOpacity>
          <View style={style.linkWrapper}>
            <Text style={[style.link, style.linkText]}>회원 탈퇴하기</Text>
          </View>
        </View>
      </View>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    profile: user.profile
  };
};

export default connect(mapStateToProps, null)(ProfileDetailScreen);
