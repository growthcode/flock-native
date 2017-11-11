import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'

import NavBarItem from '~/components/navBarItem'
import ActivitiesContainer from '~/containers/activities'

export default class ActivitiesScreen extends Component {
  static propTypes = {}
  state = {}
  render () {
    const { navigate } = this.props.navigation
    return (
      <ActivitiesContainer {...this.props} />
    )
  }
}
