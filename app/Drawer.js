import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import ActivityScreen from './screens/ActivityScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import UserScreen from './screens/UserScreen';
import RootStackNavigator from './RootStackNavigator'

var Drawer = DrawerNavigator({
  Activity: { screen: ActivityScreen },
  Directory: { screen: DirectoryScreen },
  User: { screen: UserScreen },
}, {
  contentComponent: props => (
    <ScrollView><DrawerItems {...props}/></ScrollView>
  )
});

export default Drawer;
