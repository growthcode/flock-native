import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

// import HomeScreen from '../screens/HomeScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
// import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    // Home: {
    //   screen: HomeScreen,
    // },
    Directory: {
      screen: DirectoryScreen,
    },
    // Settings: {
    //   screen: SettingsScreen,
    // },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          // case 'Home':
          //   iconName = Platform.OS === 'ios'
          //     ? `ios-information-circle${focused ? '' : '-outline'}`
          //     : 'md-information-circle';
          //   break;
          case 'Directory':
            iconName = 'users';
            break;
          // case 'Settings':
          //   iconName = Platform.OS === 'ios'
          //     ? `ios-options${focused ? '' : '-outline'}`
          //     : 'md-options';
          default:
            iconName = 'beer';
        }
        return (
          <FontAwesome
            name={iconName}
            className={'fa-circle'}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
