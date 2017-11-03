import React, { PropTypes } from 'react'

import { StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Col,
  Container,
  Content,
  Footer,
  FooterTab,
  Grid,
  Header,
  Icon,
  Left,
  Row,
  Right,
  Text,
  Title,
  View,
} from 'native-base';

export default function TempCommonPage (props) {
  const { navigate } = props.navigation
  return (
    <Grid>
      <View>
        <Text>Hello....</Text>
      </View>
      <Row>
        <Col>
          <Button full onPress={() => navigate('Activity')} >
            <Text>Activity</Text>
          </Button>
        </Col>
        <Col>
          <Button full danger onPress={() => navigate('User')} >
            <Text>User</Text>
          </Button>
        </Col>
        <Col>
          <Button full warning onPress={() => navigate('Directory')} >
            <Text>Users</Text>
          </Button>
        </Col>
        <Col>
          <Button full dark onPress={() => navigate('DrawerToggle')} >
            <Text>Drawer</Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  )
}
