import React from 'react';
import { View, Image } from 'react-native';
import { Container, Tabs, Tab, Grid, Row, Col } from 'native-base';

import { Text } from 'react-native-elements';

// temp employee data, until I extract out profile logic to current_users profile logic
import employees from '../../../constants/Employees.js';
const temp_employee = employees[0]

export default class UserScreen extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {
    const { params } = this.props.navigation.state;
    const params_1 = params || {}
    console.log('props', this.props)
    console.log('user screen params_1', this.props.navigation.state)

    const employee = params_1.employee || temp_employee

              // {jsonParams}
    return (
      <Grid style={{flex: 1, margin: 20, alignItems: 'stretch'}}>
        <Row>
          <Col>
            <Image
              source={{uri: employee.avatar_url}}
              style={{
                alignSelf: 'center',
                height: 200,
                width: 200,
                borderWidth: 1,
                borderRadius: 100,
                margin: 10,
              }}
            />
          </Col>
        </Row>
        <Row style={{flex: 1, justifyContent: 'center', marginBottom: 20}}>
          <Text h3>{`${employee.first_name} ${employee.last_name}`}</Text>
        </Row>
        <Row>
          <Col>
            <Text style={{fontSize: 16}}>Job Category</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16}}>{employee.job_category}</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text style={{fontSize: 16}}>Job Title</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16}}>{employee.title}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}


