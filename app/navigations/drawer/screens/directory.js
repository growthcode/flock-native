import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import EmployeesContainer from '~/containers/employees'

export default class DirectoryScreen extends Component {
  static propTypes = {}
  state = {}
  filterList = (data) => {
    this.setState({
      directoryFilter: data,
    })
    this.render()
  }
  render () {
    return (
      <View>
        <SearchBar
          round={ true }
          onChangeText={ (data) => (this.filterList(data)) }
          clearIcon={ true }/>
        <EmployeesContainer { ...this.props } directoryFilter={ this.state.directoryFilter } />
      </View>
    )
  }
}
