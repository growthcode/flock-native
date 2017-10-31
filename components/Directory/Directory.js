import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import employees from '../../constants/Employees.js';

// Directory.propTypes = {

// }
console.log(employees[0])

export default function Directory (props) {
  return (
    <View>

        {
          employees.map((employee) => (
            <Text key={employee.id} style={props.tempTestingStyle}>
              {`${employee.first_name} ${employee.last_name} ${employee.email ? "- " + employee.email : (employee.username || '')} ${employee.cell_phone ? "- " + employee.cell_phone : ''} ${employee.job_title ? "- " + employee.job_title : ''} ${employee.job_category && employee.job_category !== 'N/A' ? "- " + employee.job_category : ''} ${(employee.location && employee.location !== 'N/A') ? "- " + employee.location : ''}`}
              &nbsp; ================================================================================================================
            </Text>
          ))
        }
    </View>
  )
}

// const styles = StyleSheet.create({

// })
