import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'

import {
  List,
  ListItem,
} from 'react-native-elements'

export default function Employees (props) {
  const { employees } = props
  return (
    <ScrollView>
      <List containerStyle={ { marginBottom: 60, marginTop: 15 } }>
        {
          employees.map((employee, i) => {
            // debugger
            return (
              <TouchableOpacity
                key={ employee.id }
                onPress={ () => (props.onPress(employee)) }>
                <ListItem
                  key={ employee.id }
                  roundAvatar={ true }
                  title={ `${employee.first_name} ${employee.last_name}` }
                  subtitle={ employee.title }
                  avatar={ { uri: employee.avatar_url } }/>
              </TouchableOpacity>
            )
          })
        }
      </List>
    </ScrollView>
  )
}
