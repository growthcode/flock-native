import React from 'react';
import { View, Image } from 'react-native';
import { Container, Tabs, Tab, Grid, Row, Col } from 'native-base';

import { Text } from 'react-native-elements';


export default class UserScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Grid style={{flex: 1, margin: 20, alignItems: 'stretch'}}>
        <Row>
          <Col>
            <Image
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
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
          <Text h3>Hethe Berg</Text>
        </Row>
        <Row>
          <Col>
            <Text style={{fontSize: 16}}>Job Title</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16}}>Job Title</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text style={{fontSize: 16}}>Job Title</Text>
          </Col>
          <Col style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16}}>Job Title</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}


