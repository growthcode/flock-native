import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

LeftHeaderComponent.propTypes = {

}

export default function LeftHeaderComponent (props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('DrawerToggle') }
      >
        <MaterialIcons
          name={'menu'}
          style={{ fontSize: 24, color: 'black' }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})
