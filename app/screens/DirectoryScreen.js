import React from 'react';

import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';

import TempCommonPage from '../components/TempCommonPage';
import FooterBar from '../components/Footer/FooterBar';
import Directory from '../components/Directory/Directory';
import Activity from '../components/Activity/Activity';

export default class DirectoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Directory',
  };

  render() {
    return (
      <Container>
        <Content>
          <Directory />
          <Activity navigation={ this.props.navigation } />
        </Content>
        <FooterBar navigation={ this.props.navigation } />
      </Container>
    );
  }
}



// <View>
//   <Directory />
//   <Container>
//   <Content>
//     <TempCommonPage navigation={ this.props.navigation } />
//     <FooterBar navigation={ this.props.navigation } />
//   </Content>
//   </Container>
// </View>


