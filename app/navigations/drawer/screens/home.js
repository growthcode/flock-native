import React, { Component } from 'react'
import { View } from 'react-native'

import ActivitiesContainer from '~/containers/activities'
import PollsContainer from '~/containers/polls'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Activity Feed',
  };
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <ActivitiesContainer { ...this.props } />
        <PollsContainer { ...this.props } />
      </View>
    )
  }
}
