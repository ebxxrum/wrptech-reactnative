import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Action from '../../components/Action';
import style from '../commonStyle';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        />
      <View style={styles.profileWrapper}>
        <Text style={[style.nestedText, styles.profileText]}>{props.profile.name}</Text>
        <TouchableOpacity onPressOut={() => props.navigation.navigate('ProfileDetail')}>
          <SimpleLineIcons
            style={style.nestedText}
            name='settings'
          />
        </TouchableOpacity>
        <View style={styles.logoutBtn}>
          <TouchableOpacity onPressOut={props.logout}>
            <SimpleLineIcons
              style={[style.nestedText]}
              name='logout'
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.list}>
      </View>
      <Action {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#DF2F3C'
  },
  logoutBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileText: {
    paddingRight: 10,
  },
  list: {
    backgroundColor: '#fff'
  }

});

export default ProfileScreen;
