import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import ActivityScreen from './screens/ActivityScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import UserScreen from './screens/UserScreen';

var Drawer = DrawerNavigator({
    Activity: { screen: ActivityScreen },
    Directory: { screen: DirectoryScreen },
    User: { screen: UserScreen },
});

export default Drawer;
