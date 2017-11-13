import React, { PropTypes, Component } from 'react'

import Profile from '~/components/profile'

export default class ProfileTabContainer extends Component {
  static propTypes = {}
  render () {
    return (
      <Profile employee={ this.props.screenProps.employee } />
    )
  }
}
