import React from 'react';

import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';

import Activity from '../components/Activity/Activity';
import TempCommonPage from '../components/TempCommonPage';
import FooterBar from '../components/Footer/FooterBar.js';

export default class ActivityScreen extends React.Component {
  static navigationOptions = {
    title: 'Activity',
    drawerLabel: 'Activity Feed',
  };

  render() {
    return (
      <Container>
        <Content>
          <Activity navigation={ this.props.navigation } />
        </Content>
        <FooterBar navigation={ this.props.navigation } />
      </Container>
    );
  }
}
