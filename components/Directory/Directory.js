import React, { PropTypes } from 'react'
import employees from '../../constants/Employees.js';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

console.log(employees[0])
const employee = employees[0]

export default function Directory (props) {
  return (
    <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{uri:l.avatar_url}}
            key={i}
            title={l.name}
          />
        ))
      }
    </List>
  )
}




// import { Content, View, Text, ListItem } from 'native-base';
//     <Content>
//       <ListItem itemDivider>
//         <Text>A</Text>
//       </ListItem>
//       <ListItem>
//         <Text>Aaron Bennet</Text>
//       </ListItem>
//     </Content>

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
