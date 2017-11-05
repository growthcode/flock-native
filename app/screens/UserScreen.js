import React from 'react';
import { ScrollView, View, StyleSheet, Platform, Image } from 'react-native';
import { Container, Tabs, Tab, } from 'native-base';

import {
  Avatar,
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  List,
  ListItem,
  SearchBar,
  Header,
} from 'react-native-elements';

import Profile from '../components/Profile/Profile';
import Activity from '../components/Activity/Activity';
import Directory from '../components/Directory/Directory';
import TempUniqNameDirectory from '../components/Directory/Directory';
import FooterBar from '../components/Footer/FooterBar.js';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <Tabs>
          <Tab heading="Profile" style={{flex: 1, alignItems: 'stretch'}}>
            <Profile navigation={ this.props.navigation }/>
          </Tab>
          <Tab heading="Tasks">
            <Text>Tasks Tab</Text>
          </Tab>
          <Tab heading="Benefits">
            <TempUniqNameDirectory navigation={ this.props.navigation } />
            <Text>Benefits Tab</Text>
          </Tab>
        </Tabs>
      </ScrollView>
    );
  }
}


