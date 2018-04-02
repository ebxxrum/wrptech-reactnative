import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo'; // to keep the app loading screen open if it is the first and only component redered in app. to let download and cache assets.
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'; // to wrap root component. to delay the rendering of app's UI until persisted state has been retrieved and saved to redux.
import configureStore from './redux/configureStore';
import AppContainer from './components/AppContainer';

const { persistor, store } = configureStore();
console.log(store.getState());
class App extends Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync = { this._loadAssetsAsync }
          onError = { this._handleLoadingError }
          onFinish = { this._handleFinishLoading }
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
          require('./assets/icon.png')
      ]),
      Font.loadAsync([...Ionicons.font, ...MaterialIcons.font])
    ]);
  };

  _handleLoadingError = error => {
    console.log(error);
  };

  _handleFinishLoading = async() => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

export default App;


// import LogInScreen from './screens/LogInScreen';
// import JoinScreen from './screens/JoinScreen';
// import AuthLoadingScreen from './screens/AuthLoadingScreen';
// import ReportScreen from './screens/ReportScreen';
// import { StackNavigator, SwitchNavigator } from 'react-navigation';
//
// const AuthStack = StackNavigator({ LogIn: LogInScreen, Join: JoinScreen  });
// const AppStack = StackNavigator({ Report: ReportScreen });
//
// export default SwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );
