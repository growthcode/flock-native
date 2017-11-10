import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import ActivitiesContainer from '~/containers/activities'

const Drawer = DrawerNavigator({
  TempOther: { screen: ActivitiesContainer },
  Activities: { screen: ActivitiesContainer },
})

export default Drawer
