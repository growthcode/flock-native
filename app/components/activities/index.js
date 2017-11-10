import React, { PropTypes } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

// Activities.propTypes = {
//   navigation: PropTypes.shape({
//     state: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default function Activities (props) {
  return (
    <View>
      <View>
        <Text>
          { 'Activities' }
        </Text>
      </View>

      <View>
        <Button
          onPress={ () => props.navigate('DrawerToggle') }
          title='DrawerToggle' />
      </View>

      <View>
        <Button
          onPress={ () => props.navigate('TempOther') }
          active={ props.routeName === 'TempOther' }
          title='TempOther' />
      </View>

      <View>
        <Button
          onPress={ () => props.navigate('Activities') }
          active={ props.routeName === 'Activities' }
          title={ 'Activities' } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})
