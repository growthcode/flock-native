import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text } from 'react-native';

import Drawer from '~/containers/navigations/drawer';

const RootStackNavigator = StackNavigator({
  Drawer: { screen: Drawer },
});

export default RootStackNavigator;
