import React from 'react';
import { Platform, StatusBar, StyleSheet, } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import RootNavigationsContainer from '~/navigations/root';

import { Root, View, Text, } from "native-base";
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigationsContainer />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('~/assets/images/flock.png'),
        require('~/assets/images/flock-large.png'),
      ]),
      Font.loadAsync([
        Ionicons.font, // This is the font that we are using for our tab bar
        FontAwesome.font,
        MaterialIcons.font,

        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        {
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          'space-mono': require('~/assets/fonts/SpaceMono-Regular.ttf'),
        },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
