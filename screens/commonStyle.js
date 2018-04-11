import { StyleSheet } from 'react-native';

const primary = '#DF2F3C';
const gray_light = '#B0B0B0';
const white = '#fff';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },

  logoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mainLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: primary
  },
  subLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingRight: 5,
    color: gray_light
  },

  joinWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: gray_light,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 18
  },
  textIcon: {
    paddingRight: 10,
    fontSize: 20,
    color: "#B0B0B0"
  },
  primaryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 20,
    borderRadius: 100,
    backgroundColor: primary,
    borderColor: primary,
  },
  nestedText: {
    fontWeight: 'bold',
    color: white,
    fontSize: 18
  },

  linkWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  link: {
    margin: 10,
    fontSize: 15,
  },
  linkText: {
    color: "#B0B0B0"
  },

  navCalander: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
    // paddingBottom: 15,
  },
  navTop: {
    paddingRight: 15,
    color: '#fff',
    fontSize: 18,
  },

  //ActionButton
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
