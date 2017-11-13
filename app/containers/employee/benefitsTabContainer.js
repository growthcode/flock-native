import React, { PropTypes, Component } from 'react'

// import Benefits from '~/components/benefits'
import Benefits from '~/components/profile'

export default class BenefitsTabContainer extends Component {
  static propTypes = {}
  render () {
    return (
      <Benefits employee={ this.props.screenProps.employee } />
    )
  }
}
