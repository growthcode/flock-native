import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import employees from '../../constants/Employees.js';

// Directory.propTypes = {

// }

export default function Directory (props) {
  return (
    <View>

        {
          employees.map((employee) => (
            <Text key={employee.id}>
              {`${employee.first_name} ${employee.last_name} - ${employee.email}`}
            </Text>
          ))
        }

    </View>
  )
}

// const styles = StyleSheet.create({

// })
