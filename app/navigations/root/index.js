import React from 'react'
import { StackNavigator } from 'react-navigation'

import EmployeeScreen from '~/navigations/drawer/screens/employee'
import LoginScreen from '~/navigations/root/screens/login'
import Drawer from '~/navigations/drawer'

const RootStackNavigator = StackNavigator({
  // Login: { screen: LoginScreen,
  //   navigationOptions: ({ navigation }) => {
  //     return ({
  //     // header: null,
  //     })
  //   },
  // },
  Drawer: { screen: Drawer },
  Employee: { screen: EmployeeScreen },
})

export default RootStackNavigator
