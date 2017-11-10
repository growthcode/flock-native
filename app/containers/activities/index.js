import React, { Component } from 'react'
import Activities from '~/components/activities'

export default class ActivitiesContainer extends Component {
  static propTypes = {}
  render () {
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <Activities
        navigate={ navigate }
        routeName={ routeName }
      />
    )
  }
}
