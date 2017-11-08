import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import ActivitiesContainer from '~/containers/activities'

const DrawerContainer = DrawerNavigator({
  TempOther: { screen: ActivitiesContainer },
  Activity: { screen: ActivitiesContainer },
});

export default DrawerContainer;