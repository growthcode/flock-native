import React from 'react'
import { StackNavigator } from 'react-navigation'

import Drawer from '~/navigations/drawer'

const RootStackNavigator = StackNavigator({
  Drawer: { screen: Drawer },
})

export default RootStackNavigator
