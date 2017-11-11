import React, { Component } from 'react'
import Polls from '~/components/polls'

export default class PollsContainer extends Component {
  static propTypes = {}
  state = {}
  render () {
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <Polls
        navigate={ navigate }
        routeName={ routeName } />
    )
  }
}
