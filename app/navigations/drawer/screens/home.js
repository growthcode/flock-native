import React, { Component } from 'react';
import { View } from 'react-native'

import NavBarItem from '~/components/navBarItem'
import ActivitiesContainer from '~/containers/activities'
import PollsContainer from '~/containers/polls'

export default class HomeScreen extends Component {
  // navigationOptions = {
    // title: state.routeName,
  // }
  static propTypes = {}
  state = {}
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <ActivitiesContainer {...this.props} />
        <PollsContainer {...this.props} />
      </View>
    )
  }
}
