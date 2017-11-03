import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Tab,
  Tabs,
  Text,
  Title,
  View,
} from 'native-base';

import Activity from '../components/Activity/Activity';
import Directory from '../components/Directory/Directory';
import TempUniqNameDirectory from '../components/Directory/Directory';
import FooterBar from '../components/Footer/FooterBar.js';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Profile">
            <Text>Profile Tab</Text>
            <Activity navigation={ this.props.navigation }/>
          </Tab>
          <Tab heading="Tasks">
            <Text>Tasks Tab</Text>
            <Directory navigation={ this.props.navigation } />
          </Tab>
          <Tab heading="Benefits">
            <Text>Benefits Tab</Text>
            <TempUniqNameDirectory navigation={ this.props.navigation } />
          </Tab>
        </Tabs>
        <FooterBar navigation={ this.props.navigation } />
      </Container>
    );
  }
}
