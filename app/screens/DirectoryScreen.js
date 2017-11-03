import React from 'react';

import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';

import TempCommonPage from '../components/TempCommonPage';
import FooterBar from '../components/Footer/FooterBar.js';
import DirectoryContainer from '../../containers/Directory/DirectoryContainer';

export default class DirectoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Directory',
  };

  render() {
    return (
      <Container>
        <Content>
          <TempCommonPage navigation={ this.props.navigation } />
          <DirectoryContainer />
        </Content>
        <FooterBar navigation={ this.props.navigation } />
      </Container>
    );
  }
}
