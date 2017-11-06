import React from "react";
import { StackNavigator } from "react-navigation";
import Drawer from './Drawer';
import ActivityScreen from './screens/ActivityScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import UserScreen from './screens/UserScreen';
import LeftHeaderComponent from './components/Header/LeftHeaderComponent'

const RootStackNavigator = StackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: ({navigation}) => ({
      headerLeft: ( <LeftHeaderComponent navigation={navigation} /> ),
    }),
  },
  Activity: { screen: ActivityScreen },
  Directory: { screen: DirectoryScreen },
  User: { screen: UserScreen },
});

export default RootStackNavigator;


// initialRouteName: 'Home'

