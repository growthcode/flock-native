import React, { PropTypes, View } from 'react'
import employees from '../../constants/Employees.js';
import { List, ListItem, ListView } from 'react-native-elements'

export default function Directory (props) {
  return (
    <List containerStyle={{marginBottom: 20}}>
      {
        employees.map((employee, i) => (
          <ListItem
            key={i}
            roundAvatar
            title={`${employee.first_name} ${employee.last_name}`}
            subtitle={employee.title}
            avatar={{uri:employee.avatar_url}}
          />
        ))
      }
    </List>
  )
}
