import React from "react";
import { StackNavigator } from "react-navigation";
import { ScrollView, View, Text } from 'react-native';

import ActivitiesContainer from '~/containers/activities'

const RootStackNavigator = StackNavigator({
  Activity: { screen: ActivitiesContainer },
});

export default RootStackNavigator;
