import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import HomeScreen from '~/navigations/drawer/screens/home'
import DirectoryScreen from '~/navigations/drawer/screens/directory'
import EmployeeScreen from '~/navigations/drawer/screens/employee'

const Drawer = DrawerNavigator({
  Home: { screen: HomeScreen },
  Directory: { screen: DirectoryScreen },
  Employee: { screen: EmployeeScreen },
})

export default Drawer
