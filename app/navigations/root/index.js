import React from 'react'
import { StackNavigator } from 'react-navigation'

import LoginContainer from '~/containers/login'
import Drawer from '~/navigations/drawer'

const RootStackNavigator = StackNavigator({
  Login: { screen: LoginContainer },
  Drawer: { screen: Drawer },
})

export default RootStackNavigator
