import React from 'react'
import { StackNavigator } from 'react-navigation'

import LoginScreen from '~/navigations/root/screens/login'
import Drawer from '~/navigations/drawer'
import NavBarItem from '~/components/navBarItem'

const RootStackNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Drawer: { screen: Drawer},
},
  {
    navigationOptions: ({ navigation }) => {
      const { navigate, state } = navigation
      const primaryColor = '#3498db'
      const secondaryColor = 'white'
      return {
        title: state.routeName,
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTitleStyle: {
          color: secondaryColor,
        },
        headerTintColor: {
          tintColor: secondaryColor,
        },
        headerLeft: state.routeName === 'Login' ? null : (
          <NavBarItem
            iconName="bars"
            onPress={ () => { navigate('DrawerToggle') } }
          />
        )
      }
    }
  }
)

export default RootStackNavigator
