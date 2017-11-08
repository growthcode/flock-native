import React, { PropTypes, Component } from 'react'
import { View, Button, Text } from 'react-native'

export default class Activity extends Component {
  static propTypes = {}

  render () {
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <View>
        <View>
          <Text>
            Activity
          </Text>
        </View>

        <View>
          <Button
            onPress={() => navigate('DrawerToggle')}
            title='DrawerToggle' />
        </View>

        <View>
          <Button
            onPress={() => navigate('TempOther')}
            active={routeName === 'TempOther'}
            title='TempOther' />
        </View>

        <View>
          <Button
            onPress={() => navigate('Activity')}
            active={routeName === 'Activity'}
            title='Activity' />
        </View>
      </View>
    )
  }
}
