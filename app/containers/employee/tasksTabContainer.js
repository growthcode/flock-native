import React, { PropTypes, Component } from 'react'

// import Tasks from '~/components/tasks'
import Tasks from '~/components/profile'

export default class TasksTabContainer extends Component {
  static propTypes = {}
  render () {
    return (
      <Tasks employee={ this.props.screenProps.employee } />
    )
  }
}
