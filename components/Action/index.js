import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#DF2F3C',
  },
  mainButtonIcon: {
    color: '#fff',
  },

  actionButtonTextContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  actionButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  }
});

const Action = props => {
  console.log("actionButton");
  console.log(props);
  return (
    <View>
      <ActionButton
        buttonColor="rgba(223,47,60,100)"
        btnOutRange="rgba(176,176,176,100)"
        bgColor="rgba(0,0,0,0.85)"
      >
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="마이페이지"
          onPress={() => props.navigation.navigate('Profile')}
        >
          <SimpleLineIcons name="user" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="주별목록"
          onPress={() => {}}
        >
          <SimpleLineIcons name="calendar" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          buttonColor='#fff'
          title="이번주 보고서"
          onPress={() => {}}
        >
          <SimpleLineIcons name="book-open" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          textContainerStyle={styles.actionButtonTextContainer}
          textStyle={styles.actionButtonText}
          title="보고서 작성"
          onPress={() => {}}
        >
          <SimpleLineIcons name="pencil" style={[styles.actionButtonIcon, styles.mainButtonIcon]} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default Action;
