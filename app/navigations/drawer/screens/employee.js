import ProfileContainer from '~/containers/profile'
import BenefitsContainer from '~/containers/benefits'
import TasksContainer from '~/containers/tasks'
import React from 'react'
import { TabNavigator } from 'react-navigation'

const EmployeeScreen = TabNavigator({
  Profile: {
    screen: ProfileContainer,
  },
  Benefits: {
    screen: BenefitsContainer,
  },
  Tasks: {
    screen: TasksContainer,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default EmployeeScreen
