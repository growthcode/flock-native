import React from 'react';
import { View, Image } from 'react-native';
import { Container, Tabs, Tab, Grid, Row, Col } from 'native-base';

import { Text } from 'react-native-elements';

// setParams({ mode: isInfo ? 'none' : 'info' })

export default class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { employee } = state.params;
    return {
      title: `${employee.first_name} ${employee.last_name}`,
      // headerRight: (
        // <Button
          // title={'stuff and things'}
          // onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
        // />
      // ),
    };
  };



  render() {
    const employee = {}
    if (this.props.employee !== undefined) {
      const employee = this.props.employee
    } else {
      const { params } = this.props.navigation.state;
      const employee = params.employee
    }

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
