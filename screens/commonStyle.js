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

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: gray_light,
  },
  input: {
    fontSize: 18
  },
  textIcon : {
    paddingRight: 10,
    fontSize: 20
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

  joinWrapper: {
    flex: 1,
    justifyContent: 'center'
  },












  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 15
  },
  navTop: {
    flex: 1,
    fontSize: 18,
    color: white
  },
  navIcon: {
    paddingRight: 10,
    fontSize: 18,
    color: white
  },



  title: {
    color: primary
  },
  form: {
    padding: 10,
    margin: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  buttonWrapper: {
		backgroundColor:'#D3D3D3',
		marginBottom: 10,
    width: 300
  },
  header: {
      height : 60,
      flexDirection: 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      marginTop : 30,
      marginBottom : 20,
      paddingLeft : 20,
      paddingRight : 20,
      backgroundColor : 'white',

      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
  },
  list: {
      flexDirection: 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      height : 50,
      paddingLeft : 20,
      paddingRight : 20,
      backgroundColor : 'white'
  },
  roundText : {
      padding : 5,
      borderRadius:100,
      color : 'white',
      backgroundColor:'grey',
  }
});
