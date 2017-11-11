import React, { PropTypes } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

// Polls.propTypes = {
//   navigation: PropTypes.shape({
//     state: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default function Polls (props) {
  return (
    <View>
      <View>
        <Text>
          { 'Polls' }
        </Text>
      </View>

      <View>
        <Button
          onPress={ () => props.navigate('TempOther') }
          active={ props.routeName === 'TempOther' }
          title='TempOther' />
      </View>

      <View>
        <Button
          onPress={ () => props.navigate('Polls') }
          active={ props.routeName === 'Polls' }
          title={ 'Polls' } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})
