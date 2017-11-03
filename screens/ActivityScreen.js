import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import TempCommonPage from '../app/components/TempCommonPage';

export default class ActivityScreen extends React.Component {
  static navigationOptions = {
    title: 'Activity',
  };

  render() {
    return (
      <TempCommonPage navigation={ this.props.navigation } />
    );
  }
}
