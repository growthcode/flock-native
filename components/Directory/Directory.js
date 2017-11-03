import React, { PropTypes } from 'react'
import employees from '../../constants/Employees.js';
import { Content, View, Text, ListItem } from 'native-base';
// Directory.propTypes = {

// }
console.log(employees[0])
const employee = employees[0]

export default function Directory (props) {
  return (
    <Content>
      <ListItem itemDivider>
        <Text>A</Text>
      </ListItem>
      <ListItem>
        <Text>Aaron Bennet</Text>
      </ListItem>
    </Content>
  )
}

    // <View>

    //     {
    //       employees.map((employee) => (
    //         <Text key={employee.id} style={props.tempTestingStyle}>
    //           {`${employee.first_name} ${employee.last_name} ${employee.email ? "- " + employee.email : (employee.username || '')} ${employee.cell_phone ? "- " + employee.cell_phone : ''} ${employee.job_title ? "- " + employee.job_title : ''} ${employee.job_category && employee.job_category !== 'N/A' ? "- " + employee.job_category : ''} ${(employee.location && employee.location !== 'N/A') ? "- " + employee.location : ''}`}
    //           &nbsp; ================================================================================================================
    //         </Text>
    //       ))
    //     }
    // </View>
