import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from './Drawer';
import ActivityScreen from './screens/ActivityScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import UserScreen from './screens/UserScreen';

const RootStackNavigator = StackNavigator({
  Drawer: { screen: Drawer },
  Activity: { screen: ActivityScreen },
  Directory: { screen: DirectoryScreen },
  User: { screen: UserScreen },
});

export default RootStackNavigator;
