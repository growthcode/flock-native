import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Employees from '~/components/employees';
import EmployeesData from '~/helpers/constants/EmployeesData';

export default class DirectoryScreen extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View>
        <SearchBar
          round
          textInputRef="textInputRef"
          placeholder="Search"
        />
          <Employees {...this.props} employees={EmployeesData} />
      </View>
    )
  }
}
