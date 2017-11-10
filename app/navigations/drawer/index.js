import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import ActivitiesScreen from '~/navigations/drawer/screens/activities'
import DirectoryScreen from '~/navigations/drawer/screens/directory'
import EmployeeScreen from '~/navigations/drawer/screens/employee'

const Drawer = DrawerNavigator({
  TempOther: { screen: ActivitiesScreen },
  Directory: { screen: DirectoryScreen },
  Employee: { screen: EmployeeScreen },
  Activities: { screen: ActivitiesScreen },
})

export default Drawer
