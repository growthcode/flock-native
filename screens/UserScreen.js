import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  FooterTab,
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

import ActivityScreen from '../screens/ActivityScreen';
import DirectoryScreen from '../screens/DirectoryScreen';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Activity">
            <Text>Activity Tab</Text>
            <ActivityScreen navigation={ this.props.navigation }/>
          </Tab>
          <Tab heading="Directory">
            <Text>Directory Tab</Text>
            <DirectoryScreen navigation={ this.props.navigation }/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
