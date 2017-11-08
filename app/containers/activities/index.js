import React, { PropTypes, Component } from 'react'
import { View, Button, Text } from 'react-native'

export default class Activities extends Component {
  static propTypes = {}

  render () {
    const { navigate } = this.props.navigation
    const { routeName } = this.props.navigation.state
    return (
      <View>
        <View>
          <Text>
            Activities
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
            onPress={() => navigate('Activities')}
            active={routeName === 'Activities'}
            title='Activities' />
        </View>
      </View>
    )
  }
}

// Activities.propTypes = {
//   navigation: PropTypes.shape({
//     state: PropTypes.func.isRequired,
//   }).isRequired,
// };
