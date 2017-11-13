import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import ProfileTabContainer from '~/containers/employee/profileTabContainer'
import BenefitsTabContainer from '~/containers/employee/benefitsTabContainer'
import TasksTabContainer from '~/containers/employee/tasksTabContainer'

import { getEmployee } from '~/helpers/constants/EmployeesData'

const EmployeeTabs = TabNavigator({
  Profile: {
    screen: ProfileTabContainer,
  },
  Benefits: {
    screen: BenefitsTabContainer,
  },
  Tasks: {
    screen: TasksTabContainer,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})

export default class EmployeeScreen extends Component {
  static propTypes = {}

  componentWillMount () {
    const employeeId = this.props.navigation.state.params.id
    this.setState({ employee: this.getEmployee(employeeId) })
  }

  render () {
    return (
      <EmployeeTabs screenProps={ { employee: this.state.employee } } />
    )
  }
}

EmployeeScreen.prototype.getEmployee = getEmployee
