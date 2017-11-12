import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'

import Profile from '~/components/profile'
import EmployeesData from '~/helpers/constants/EmployeesData';

export default class ProfileContainer extends Component {
  static propTypes = {}
  static navigationOptions = ({ navigation }) => {
    // const { state, setParams } = navigation;
    // const { employee } = state ? state.params : {employee: null}
    // const employee = EmployeesData[0]
    // return {
    //   title: `${employee.first_name} ${employee.last_name}`,
    // }
  }
  render () {
    return (
      <Profile />
    )
  }
}
